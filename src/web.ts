import {WebPlugin} from "@capacitor/core";
import {FirebaseMessagingPlugin} from "./plugin";
import {NotificationsPermissionState} from "./notifications-permission-state";

export class FirebaseMessagingWebPlugin extends WebPlugin implements FirebaseMessagingPlugin {
	
	constructor() {
		super({name: "FirebaseMessaging", platforms: ["web"]});
	}

	openNotificationsPermissionSettings(): void {
		throw new Error("Method not implemented.");
	}

	notificationsPermissionState(): Promise<{"state": NotificationsPermissionState}> {
		throw new Error("Method not implemented.");
	}
	
	subscribeToTopic(call: {topic: string}): Promise<void> {
		throw new Error("Method not implemented.");
	}
	
	unsubscribeFromTopic(call: {topic: string}): Promise<void> {
		throw new Error("Method not implemented.");
	}
	
	destroy(): Promise<void> {
		throw new Error("Method not implemented.");
	}
}

const FirebaseMessaging = new FirebaseMessagingWebPlugin();

export {FirebaseMessaging};
