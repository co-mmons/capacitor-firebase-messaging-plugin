package co.mmons.capacitor.firebase.messaging;

import com.getcapacitor.JSObject;
import com.getcapacitor.MessageHandler;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginResult;

public class DummyPluginCall extends PluginCall {

    public DummyPluginCall(String pluginId, String methodName) {
        super(null, pluginId, null, methodName, null);
    }

    public void success(JSObject data) {
    }

    public void success() {
    }


}
