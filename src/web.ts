import {WebPlugin} from "@capacitor/core";
import {FirebaseMessagingPlugin, NotificationPermissionState} from "./definitions";

export class FirebaseMessagingWebPlugin extends WebPlugin implements FirebaseMessagingPlugin {
	
	constructor() {
		super({name: "FirebaseMessaging", platforms: ["web"]});
	}

	openPermissionSettings(): void {
		throw new Error("Method not implemented.");
	}

	permissionState(): Promise<{"state": NotificationPermissionState}> {
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
