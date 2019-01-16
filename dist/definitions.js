/**
 * State of notification permission.
 */
export var NotificationPermissionState;
(function (NotificationPermissionState) {
    /**
     * The app has permission to use system notifications.
     */
    NotificationPermissionState["granted"] = "granted";
    /**
     * 	The app has been denied permission to use system notifications.
     */
    NotificationPermissionState["denied"] = "denied";
    /**
     * The app needs to ask for permission in order use system notifications.
     */
    NotificationPermissionState["prompt"] = "prompt";
})(NotificationPermissionState || (NotificationPermissionState = {}));
;
//# sourceMappingURL=definitions.js.map