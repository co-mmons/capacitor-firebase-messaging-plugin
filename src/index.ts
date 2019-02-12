import {Capacitor, Plugins} from "@capacitor/core";
import {FirebaseMessagingWebPlugin} from "./web";

export * from "./notifications-permission-state";
export * from "./plugin";
export * from "./web";
export * from "./remote-message";

if (Capacitor.platform == "web") {
    Plugins.FirebaseMessaging = new FirebaseMessagingWebPlugin();
}

const instance = Plugins.FirebaseMessaging;
export {instance as FirebaseMessaging};

