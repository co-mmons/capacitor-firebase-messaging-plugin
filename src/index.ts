import {Capacitor, Plugins} from "@capacitor/core";
import {FirebaseMessagingPlugin} from "./plugin";
import {FirebaseMessagingWebPlugin} from "./web";

export * from "./notifications-permission-state";
export * from "./plugin";
export * from "./web";
export * from "./remote-message";

if (Capacitor.platform == "web") {
    Plugins.FirebaseMessaging = new FirebaseMessagingWebPlugin();
}

const instance = Plugins.FirebaseMessaging as FirebaseMessagingPlugin;
export {instance as FirebaseMessaging};
