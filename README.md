# capacitor-firebase-messaging-plugin
Firebase Messaging plugin for Capacitor. It extends Capacitor's push notifications support.

# Installation
For now (until Capacitor is in beta, and plugin is evolving) only installation from github. Every minor release will have a separate branch, so you may use #vX.X anchor in github link, e.g.:
```npm install git+https://github.com/co-mmons/capacitor-firebase-messaging-plugin.git#v0.1```
Until Capacitor and plugin are final, every breaking change (either in api or configuration) will bump minor version (0.1.x, 0.2.x), non breaking changes bumps patch version (0.1.0, 0.2.1). You can also use master branch for latest version:
```npm install git+https://github.com/co-mmons/capacitor-firebase-messaging-plugin.git```

# Configure Android app
First you need to edit android/settings.gradle and link plugin to node_modules:
```
include ':capacitor-firebase-messaging-plugin'
project(':capacitor-firebase-messaging-plugin').projectDir = new File('../node_modules/@co.mmons/capacitor-firebase-messaging-plugin/android/plugin/')
```
Next open android/app/build.gradle and add:
```
dependencies {
    implementation project(':capacitor-firebase-messaging-plugin')
}
```
It is very likely, that gradle will yell, about firebase versions mismatch, so edit android/build.gradle and add:
```
allprojects {
    configurations.all {
        resolutionStrategy {
            force 'com.google.firebase:firebase-core:16.0.6'
            force 'com.google.firebase:firebase-iid:17.0.4'
            force 'com.google.firebase:firebase-messaging:17.3.4'
        }
    }
}
```
Of course change firebase libs versions if needed.

You must also register plugin in MainActivity.java:
```
this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
  add(FirebaseMessagingPlugin.class);
}});
```
The last thing is to configure firebase service in AndroidManifest.xml:
```
<application>
        <service android:name="co.mmons.capacitor.firebase.messaging.FirebaseMessagingServiceImpl" android:stopWithTask="false">
            <intent-filter>
                <action android:name="com.google.firebase.MESSAGING_EVENT" />
            </intent-filter>
        </service>
</application>
```

# Configure iOS app
Edit ios/App/Podfile and add pod to App target:
```
target 'App' do
  # ...other pods
  pod 'CapacitorFirebaseMessagingPlugin', :path => '../../node_modules/@co.mmons/capacitor-firebase-messaging-plugin'  
end
```

# API
Basically, you need to use PushNotifications from Capacitor - follow the docs (https://capacitor.ionicframework.com/docs/apis/push-notifications). The one thing, you don't need to do is to call register, as the FirebaseMessagingPlugin registers at the launch.

```
export interface FirebaseMessagingPlugin {
    /**
     * Open permission settings for current app. On iOS it will open settings related to system notifications,
     * on android it will open "about app" view, where the user will be able to grant system notifications.
     */
    openPermissionSettings(): void;
    /**
     * Returns state of permission for system notifications (not only push, local as well).
     *
     * @return On Android only `NotificationPermissionState.granted` and `NotificationPermissionState.denied`.
     */
    permissionState(): Promise<{
        "state": NotificationPermissionState;
    }>;
    /**
     * Subscribes to topic.
     * @param topic The name of the topic to subscribe. Must match the following regular expression: "[a-zA-Z0-9-_.~%]{1,900}".
     * @return A promise, which is resolved when subscription successful, rejects other case.
     * @see https://firebase.google.com/docs/reference/android/com/google/firebase/messaging/FirebaseMessaging.html#subscribeToTopic(java.lang.String)
     */
    subscribeToTopic(topic: string): Promise<void>;
    /**
     * Unsubscribes from topic.
     * @param topic The name of the topic to subscribe. Must match the following regular expression: "[a-zA-Z0-9-_.~%]{1,900}".
     * @return A promise, which is resolved when unsubscription successful, rejects other case.
     * @see https://firebase.google.com/docs/reference/android/com/google/firebase/messaging/FirebaseMessaging.html#unsubscribeFromTopic(java.lang.String)
     */
    unsubscribeFromTopic(topic: string): Promise<void>;
    /**
     * Delete the firebase instance (so it applies for other firebase components, e.g. Analytics or Firestore) and the data associated with it.
     * This stops the periodic sending of data to the Firebase backend started when the instance was generated, unless
     * another library that requires instance (like FCM, RemoteConfig or Analytics) is used or it's configured to be executed automatically.
     *
     * @return A promise, which is resolved when destroy successful, rejects other case.
     */
    destroy(): Promise<void>;
}

/**
 * State of notification permission.
 */
export declare enum NotificationPermissionState {
    /**
     * The app has permission to use system notifications.
     */
    granted = "granted",
    /**
     * 	The app has been denied permission to use system notifications.
     */
    denied = "denied",
    /**
     * The app needs to ask for permission in order use system notifications.
     */
    prompt = "prompt"
}

```
