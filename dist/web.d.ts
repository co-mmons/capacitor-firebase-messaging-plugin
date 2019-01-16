import { WebPlugin } from "@capacitor/core";
import { FirebaseMessagingPlugin, NotificationPermissionState } from './definitions';
export declare class FirebaseMessagingWebPlugin extends WebPlugin implements FirebaseMessagingPlugin {
    constructor();
    openPermissionSettings(): void;
    permissionState(): Promise<{
        "state": NotificationPermissionState;
    }>;
    subscribeToTopic(topic: string): Promise<void>;
    unsubscribeFromTopic(topic: string): Promise<void>;
    destroy(): Promise<void>;
}
declare const FirebaseMessaging: FirebaseMessagingWebPlugin;
export { FirebaseMessaging };
