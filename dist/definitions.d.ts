import { PushNotification as CapacitorPushNotification, PushNotificationActionPerformed as CapacitorPushNotificationActionPerformed, PushNotificationToken } from "@capacitor/core";
declare global {
    interface PluginRegistry {
        FirebaseMessaging?: FirebaseMessagingPlugin;
    }
}
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
export { PushNotificationToken };
export interface PushNotification<ExtraData = any> extends CapacitorPushNotification {
    data?: ExtraData;
}
export interface PushNotificationActionPerformed<ExtraData = any> extends CapacitorPushNotificationActionPerformed, PushNotification<ExtraData> {
}
