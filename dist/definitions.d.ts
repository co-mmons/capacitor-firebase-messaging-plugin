declare global {
    interface PluginRegistry {
        FirebaseMessaging?: FirebaseMessagingPlugin;
    }
}
export interface FirebaseMessagingPlugin {
    openPermissionSettings(): void;
    permissionState(): Promise<{
        "state": NotificationPermissionState;
    }>;
    subscribeToTopic(topic: string): Promise<void>;
    unsubscribeFromTopic(topic: string): Promise<void>;
    destroy(): Promise<void>;
}
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
export interface PushNotification {
    title?: string;
    subtitle?: string;
    body?: string;
    id?: string;
    badge?: number;
    notification?: any;
    data?: any;
}
export interface PushNotificationActionPerformed {
    actionId: string;
    inputValue?: string;
    notificationRequest: any;
}
export interface PushNotificationToken {
    value: string;
}
