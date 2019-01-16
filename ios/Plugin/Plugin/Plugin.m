#import <Foundation/Foundation.h>
#import <Capacitor/Capacitor.h>

CAP_PLUGIN(CAPFirebaseMessagingPlugin, "FirebaseMessaging",
    CAP_PLUGIN_METHOD(openPemissionSettings, CAPPluginReturnNone);
    CAP_PLUGIN_METHOD(permissionState, CAPPluginReturnPromise);
    CAP_PLUGIN_METHOD(subscribeToTopic, CAPPluginReturnPromise);
    CAP_PLUGIN_METHOD(unsubscribeFromTopic, CAPPluginReturnPromise);
    CAP_PLUGIN_METHOD(destroy, CAPPluginReturnPromise);
)
