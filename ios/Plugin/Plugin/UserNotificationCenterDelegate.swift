import UserNotifications
import Capacitor

typealias JSObject = [String:Any];

public class UserNotificationCenterDelegateImpl : NSObject, UNUserNotificationCenterDelegate  {
    
    public var bridge: CAPBridge?;
    
    init(bridge: CAPBridge!) {
        super.init();
        
        self.bridge = bridge;
        
        let center = UNUserNotificationCenter.current()
        center.delegate = self;
    }
    
    public func requestPermissions() {

        let center = UNUserNotificationCenter.current()
        center.requestAuthorization(options:[.badge, .alert, .sound]) { (granted, error) in
        }
        
        DispatchQueue.main.async {
            UIApplication.shared.registerForRemoteNotifications()
        }
    }
    
    /**
     * Handle delegate willPresent action when the app is in the foreground.
     * This controls how a notification is presented when the app is running, such as
     * whether it should stay silent, display a badge, play a sound, or show an alert.
     */
    public func userNotificationCenter(_ center: UNUserNotificationCenter,
                                       willPresent notification: UNNotification,
                                       withCompletionHandler completionHandler: @escaping (UNNotificationPresentationOptions) -> Void) {
        
        let request = notification.request;
        
        var plugin: CAPPlugin;
        var action = "localNotificationReceived";
        
        var data = makeNotificationRequestJSObject(request);
        
        if (request.trigger?.isKind(of: UNPushNotificationTrigger.self))! {
            plugin = (self.bridge?.getOrLoadPlugin(pluginName: "FirebaseMessaging"))!
            action = "pushNotificationReceived";
            data = makePushNotificationRequestJSObject(request);
            
        } else {
            plugin = (self.bridge?.getOrLoadPlugin(pluginName: "LocalNotifications"))!;
            
        }
        
        plugin.notifyListeners(action, data: data)
        
//        completionHandler(.init(rawValue:0));
//        if let options = notificationRequestLookup[request.identifier] {
//            let silent = options["silent"] as? Bool ?? false
//            if silent {
//                completionHandler(.init(rawValue:0))
//                return
//            }
//        }
//
//        if (self.bridge?.isAppActive())! {
//            completionHandler([.badge, .sound, .alert])
//        } else {
//            completionHandler([.badge, .sound])
//        }
        //print(data);
        //completionHandler([.badge, .sound, .alert])
        completionHandler(.init(rawValue:0));
    }
    
    /**
     * Handle didReceive action, called when a notification opens or activates
     * the app based on an action.
     */
    public func userNotificationCenter(_ center: UNUserNotificationCenter,
                                       didReceive response: UNNotificationResponse,
                                       withCompletionHandler completionHandler: @escaping () -> Void) {
        completionHandler();
        
        var data = JSObject();
        
        // Get the info for the original notification request
        let originalNotificationRequest = response.notification.request
        
        let actionId = response.actionIdentifier
        
        // We turn the two default actions (open/dismiss) into generic strings
        if actionId == UNNotificationDefaultActionIdentifier {
            data["actionId"] = "tap"
        } else if actionId == UNNotificationDismissActionIdentifier {
            data["actionId"] = "dismiss"
        } else {
            data["actionId"] = actionId
        }
        
        // If the type of action was for an input type, get the value
        if let inputType = response as? UNTextInputNotificationResponse {
            data["inputValue"] = inputType.userText
        }
        
        var plugin: CAPPlugin
        var action = "localNotificationActionPerformed"
        
        if (originalNotificationRequest.trigger?.isKind(of: UNPushNotificationTrigger.self))! {
            plugin = (self.bridge?.getOrLoadPlugin(pluginName: "PushNotifications"))!
            data["notificationRequest"] = makePushNotificationRequestJSObject(originalNotificationRequest)
            action = "pushNotificationActionPerformed"
        } else {
            data["notificationRequest"] = makeNotificationRequestJSObject(originalNotificationRequest)
            plugin = (self.bridge?.getOrLoadPlugin(pluginName: "LocalNotifications"))!
        }
        
        print(data);
        plugin.notifyListeners(action, data: data)
    }
    
    /**
     * Turn a UNNotificationRequest into a JSObject to return back to the client.
     */
    func makeNotificationRequestJSObject(_ request: UNNotificationRequest) -> JSObject {
        
        return [
            "id": request.identifier,
            "extra": [:]
        ]
    }
    
    /**
     * Turn a UNNotificationRequest into a JSObject to return back to the client.
     */
    func makePushNotificationRequestJSObject(_ request: UNNotificationRequest) -> JSObject {
        let content = request.content
        
        let extraData = try? JSONSerialization.jsonObject(with: JSONSerialization.data(withJSONObject: content.userInfo), options: []);
        
        return [
            "id": request.identifier,
            "title": content.title,
            "subtitle": content.subtitle,
            "body": content.body,
            "badge": content.badge ?? 1,
            "data": extraData as Any
        ]
    }
    
}
