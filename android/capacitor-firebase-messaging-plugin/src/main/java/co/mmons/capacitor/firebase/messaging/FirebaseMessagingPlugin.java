package co.mmons.capacitor.firebase.messaging;

import android.content.Intent;
import android.net.Uri;
import android.provider.Settings;
import android.support.annotation.NonNull;
import android.support.v4.app.NotificationManagerCompat;

import com.getcapacitor.JSObject;
import com.getcapacitor.NativePlugin;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.plugin.PushNotifications;
import com.google.android.gms.tasks.OnCompleteListener;
import com.google.android.gms.tasks.Task;
import com.google.firebase.iid.FirebaseInstanceId;
import com.google.firebase.messaging.FirebaseMessaging;

import java.io.IOException;

@NativePlugin()
public class FirebaseMessagingPlugin extends Plugin {

    public void load() {

        PushNotifications capacitorPush = (PushNotifications) this.bridge.getPlugin("PushNotifications").getInstance();
        capacitorPush.register(new DummyPluginCall("PushNotifications", "register"));

//        FirebaseMessaging messaging = FirebaseMessaging.getInstance();
//        messaging.subscribeToTopic("test");
    }

    @PluginMethod()
    public void subscribeToTopic(final PluginCall call) {
        final String topic = call.getString("topic");

        FirebaseMessaging.getInstance().subscribeToTopic(topic)
            .addOnCompleteListener(new OnCompleteListener<Void>() {
                @Override
                public void onComplete(@NonNull Task<Void> task) {
                    if (task.isSuccessful()) {
                        call.resolve();
                    } else {
                        call.reject("Failed subscribing to topic " + topic, task.getException());
                    }
                }
            });
    }

    @PluginMethod()
    public void unsubscribeFromTopic(final PluginCall call) {
        final String topic = call.getString("topic");

        FirebaseMessaging.getInstance().unsubscribeFromTopic(topic)
            .addOnCompleteListener(new OnCompleteListener<Void>() {
                @Override
                public void onComplete(@NonNull Task<Void> task) {
                    if (task.isSuccessful()) {
                        call.resolve();
                    } else {
                        call.reject("Failed unsubscribing from topic " + topic, task.getException());
                    }
                }
            });
    }

    @PluginMethod()
    public void destroy(final PluginCall call) {
        try {
            FirebaseInstanceId.getInstance().deleteInstanceId();
            call.resolve();
        } catch (IOException e) {
            call.reject("Failed destroing firebase instance", e);
        }
    }

    @PluginMethod()
    public void openPermissionSettings(PluginCall call) {

        Intent intent = new Intent(Settings.ACTION_APPLICATION_DETAILS_SETTINGS);
        intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);

        Uri uri = Uri.fromParts("package", this.getContext().getPackageName(), null);
        intent.setData(uri);

        this.getContext().startActivity(intent);

        call.success();
    }

    public void permissionStatus(PluginCall call) {

        JSObject result = new JSObject();

        if (NotificationManagerCompat.from(this.getContext()).areNotificationsEnabled()) {
            result.put("result", "enabled");
        } else {
            result.put("result", "disabled");
        }

        call.resolve(result);
    }


}
