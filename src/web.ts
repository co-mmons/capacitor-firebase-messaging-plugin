import {WebPlugin} from "@capacitor/core";
import {FirebaseMessagingPlugin} from './definitions';

export class FirebaseMessagingWebPlugin extends WebPlugin implements FirebaseMessagingPlugin {
	
	constructor() {
		super({name: "FirebaseMessaging", platforms: ["web"]});
	}

	openPermissionSettings(): void {
		throw new Error("Method not implemented.");
	}

	permissionStatus(): Promise<{"result": "enabled" | "disabled" | "unknown";}> {
		throw new Error("Method not implemented.");
	}
	
	subscribeToTopic(topic: string): Promise<void> {
		throw new Error("Method not implemented.");
	}
	
	unsubscribeFromTopic(topic: string): Promise<void> {
		throw new Error("Method not implemented.");
	}
	
	destroy(): Promise<void> {
		throw new Error("Method not implemented.");
	}
}

const FirebaseMessaging = new FirebaseMessagingWebPlugin();

export {FirebaseMessaging};
