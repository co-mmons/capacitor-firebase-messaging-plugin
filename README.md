# capacitor-firebase-messaging-plugin
Firebase Messaging plugin for Capacitor

# Install:
```npm install git+https://github.com/co-mmons/capacitor-firebase-messaging-plugin.git```

# Configure Android app:
First you need to edit android/settings.gradle and link plugin to node_modules:
```
include ':capacitor-firebase-messaging-plugin'
project(':capacitor-firebase-messaging-plugin').projectDir = new File('../node_modules/@co.mmons/capacitor-firebase-messaging-plugin/android/plugin')
```
Next open android/app/build.gradle and add:
dependencies {
    implementation project(':capacitor-firebase-messaging-plugin')
}
```
It is very likely, that gradle will yell, about firebase versions mismatch, so edit android/build.gradle and add:
```
allprojects {
    configurations.all {
        resolutionStrategy {
            force 'com.google.firebase:firebase-core:16.0.6'
            force 'com.google.firebase:firebase-iid:17.0.4'
            force 'com.google.firebase:firebase-messaging:17.3.4'
        }
    }
}
```
Of course change firebase libs versions if needed.

You must also register plugin in MainActivity.java:
```
this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
  add(FirebaseMessagingPlugin.class);
}});
```
