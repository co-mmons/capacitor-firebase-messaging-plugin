import Foundation
import Capacitor
import UserNotifications
import FirebaseCore
import FirebaseMessaging
import FirebaseInstanceID

@objc(CAPFirebaseMessagingPlugin)
public class CAPFirebaseMessagingPlugin: CAPPlugin, MessagingDelegate {
    
    override init(bridge: CAPBridge!, pluginId: String!, pluginName: String!) {
        self.notificationCenter = UserNotificationCenterDelegateImpl(bridge: bridge);
        
        super.init(bridge: bridge, pluginId: pluginId, pluginName: pluginName);
    }
    
    var notificationCenter: UserNotificationCenterDelegateImpl;
    
    public override func load() {
        
        FirebaseApp.configure();
        Messaging.messaging().delegate = self;
        
        Messaging.messaging().subscribe(toTopic: "test");
        self.notificationCenter.requestPermissions();
    }
    
    @objc func openPermissionSettings(_ call: CAPPluginCall) {
        UIApplication.shared.open(URL(string: "app-settings:")!);
    }
    
    @objc func permissionState(_ call: CAPPluginCall) {
        
        UNUserNotificationCenter.current().getNotificationSettings(completionHandler: {settings in
            let status = settings.authorizationStatus;
            if (status == UNAuthorizationStatus.authorized) {
                call.resolve(["result": "granted"]);
            } else if (status == UNAuthorizationStatus.denied) {
                call.resolve(["result": "denied"]);
            } else {
                call.resolve(["result": "prompt"]);
            }
        })
    }
    
    @objc func subscribeToTopic(_ call: CAPPluginCall) {
        let topic = call.getString("topic")!;
        Messaging.messaging().subscribe(toTopic: topic, completion: {completion in
            if (completion == nil) {
                call.resolve();
            } else {
                call.error("Failed subscribe to topic \(topic)", completion);
            }
        });
    }

    @objc func unsubscribeFromTopic(_ call: CAPPluginCall) {
        let topic = call.getString("topic")!;
        Messaging.messaging().unsubscribe(fromTopic: topic, completion: {completion in
            if (completion == nil) {
                call.resolve();
            } else {
                call.error("Failed unsubscribe from topic \(topic)", completion);
            }
        });
    }
    
    @objc func destroy(_ call: CAPPluginCall) {
        InstanceID.instanceID().deleteID(handler: {error in
            if (error != nil) {
                call.error("Failed delete firebase instance", error);
            } else {
                call.resolve();
            }
        });
    }

    
    public func messaging(_ messaging: Messaging, didReceiveRegistrationToken fcmToken: String) {
        print("CAPFirebaseMessagingPlugin: received token");
        notifyListeners("registration", data:["value": fcmToken]);
    }
}
