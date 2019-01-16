declare global {
    interface PluginRegistry {
        FirebaseMessaging?: FirebaseMessagingPlugin;
    }
}
export interface FirebaseMessagingPlugin {
    openPermissionSettings(): void;
    permissionStatus(): Promise<{
        "result": PushNotificationPermissionStatus;
    }>;
    subscribeToTopic(topic: string): Promise<void>;
    unsubscribeFromTopic(topic: string): Promise<void>;
    destroy(): Promise<void>;
}
export declare type PushNotificationPermissionStatus = "enabled" | "disabled" | "unknown";
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
