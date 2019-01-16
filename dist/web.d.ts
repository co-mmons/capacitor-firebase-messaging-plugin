import { WebPlugin } from "@capacitor/core";
import { FirebaseMessagingPlugin } from './definitions';
export declare class FirebaseMessagingWebPlugin extends WebPlugin implements FirebaseMessagingPlugin {
    constructor();
    openPermissionSettings(): void;
    permissionStatus(): Promise<{
        "result": "enabled" | "disabled" | "unknown";
    }>;
    subscribeToTopic(topic: string): Promise<void>;
    unsubscribeFromTopic(topic: string): Promise<void>;
    destroy(): Promise<void>;
}
declare const FirebaseMessaging: FirebaseMessagingWebPlugin;
export { FirebaseMessaging };
