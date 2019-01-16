import { WebPlugin } from "@capacitor/core";
export class FirebaseMessagingWebPlugin extends WebPlugin {
    constructor() {
        super({ name: "FirebaseMessaging", platforms: ["web"] });
    }
    openPermissionSettings() {
        throw new Error("Method not implemented.");
    }
    permissionStatus() {
        throw new Error("Method not implemented.");
    }
    subscribeToTopic(topic) {
        throw new Error("Method not implemented.");
    }
    unsubscribeFromTopic(topic) {
        throw new Error("Method not implemented.");
    }
    destroy() {
        throw new Error("Method not implemented.");
    }
}
const FirebaseMessaging = new FirebaseMessagingWebPlugin();
export { FirebaseMessaging };
//# sourceMappingURL=web.js.map