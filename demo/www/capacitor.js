/*! Capacitor: https://ionic-team.github.io/capacitor/ - MIT License */
var capacitorExports=function(t){"use strict";function e(t,e){function n(){this.constructor=t}p(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}function n(t,e,n,r){return new(n||(n=Promise))(function(o,i){function a(t){try{u(r.next(t))}catch(t){i(t)}}function s(t){try{u(r.throw(t))}catch(t){i(t)}}function u(t){t.done?o(t.value):new n(function(e){e(t.value)}).then(a,s)}u((r=r.apply(t,e||[])).next())})}function r(t,e){function n(n){return function(a){return function(n){if(r)throw new TypeError("Generator is already executing.");for(;s;)try{if(r=1,o&&(i=o[2&n[0]?"return":n[0]?"throw":"next"])&&!(i=i.call(o,n[1])).done)return i;switch(o=0,i&&(n=[0,i.value]),n[0]){case 0:case 1:i=n;break;case 4:return s.label++,{value:n[1],done:!1};case 5:s.label++,o=n[1],n=[0];continue;case 7:n=s.ops.pop(),s.trys.pop();continue;default:if(i=s.trys,!(i=i.length>0&&i[i.length-1])&&(6===n[0]||2===n[0])){s=0;continue}if(3===n[0]&&(!i||n[1]>i[0]&&n[1]<i[3])){s.label=n[1];break}if(6===n[0]&&s.label<i[1]){s.label=i[1],i=n;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(n);break}i[2]&&s.ops.pop(),s.trys.pop();continue}n=e.call(t,s)}catch(t){n=[6,t],o=0}finally{r=i=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}([n,a])}}var r,o,i,a,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return a={next:n(0),throw:n(1),return:n(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a}!function(t){t.Prompt="PROMPT",t.Camera="CAMERA",t.Photos="PHOTOS"}(t.CameraSource||(t.CameraSource={})),function(t){t.Rear="REAR",t.Front="FRONT"}(t.CameraDirection||(t.CameraDirection={})),function(t){t.Uri="uri",t.Base64="base64"}(t.CameraResultType||(t.CameraResultType={})),function(t){t.Application="APPLICATION",t.Documents="DOCUMENTS",t.Data="DATA",t.Cache="CACHE",t.External="EXTERNAL",t.ExternalStorage="EXTERNAL_STORAGE"}(t.FilesystemDirectory||(t.FilesystemDirectory={})),function(t){t.UTF8="utf8",t.ASCII="ascii",t.UTF16="utf16"}(t.FilesystemEncoding||(t.FilesystemEncoding={})),function(t){t.Heavy="HEAVY",t.Medium="MEDIUM",t.Light="LIGHT"}(t.HapticsImpactStyle||(t.HapticsImpactStyle={})),function(t){t.Default="DEFAULT",t.Destructive="DESTRUCTIVE",t.Cancel="CANCEL"}(t.ActionSheetOptionStyle||(t.ActionSheetOptionStyle={})),function(t){t.Smart="smart",t.Shared="shared",t.User="user"}(t.PhotosAlbumType||(t.PhotosAlbumType={})),function(t){t.Dark="DARK",t.Light="LIGHT"}(t.StatusBarStyle||(t.StatusBarStyle={}));var o=function(){function t(){var t=this;this.Plugins={},this.platform="web",this.isNative=!1,this.Plugins=new Proxy(this.Plugins,{get:function(e,n){if(void 0===e[n]){var r=t;return new Proxy({},{get:function(t,e){return void 0===t[e]?r.pluginMethodNoop.bind(r,t,e,n):t[e]}})}return e[n]}})}return t.prototype.pluginMethodNoop=function(t,e,n){return Promise.reject(n+" does not have web implementation.")},t.prototype.getPlatform=function(){return this.platform},t.prototype.isPluginAvailable=function(t){return this.Plugins.hasOwnProperty(t)},t.prototype.handleError=function(t){console.error(t)},t}();t.Capacitor=new o,t.Capacitor=window.Capacitor||t.Capacitor,window.Capacitor||(window.Capacitor=t.Capacitor);var i=t.Capacitor.Plugins,a=function(){function t(){this.plugins={},this.loadedPlugins={}}return t.prototype.addPlugin=function(t){this.plugins[t.config.name]=t},t.prototype.getPlugin=function(t){return this.plugins[t]},t.prototype.loadPlugin=function(t){var e=this.getPlugin(t);e?e.load():console.error("Unable to load web plugin "+t+", no such plugin found.")},t.prototype.getPlugins=function(){var t=[];for(var e in this.plugins)t.push(this.plugins[e]);return t},t}(),s=new a,u=function(){function t(t,e){this.config=t,this.loaded=!1,this.listeners={},this.windowListeners={},e?e.addPlugin(this):s.addPlugin(this)}return t.prototype.addWindowListener=function(t){window.addEventListener(t.windowEventName,t.handler),t.registered=!0},t.prototype.removeWindowListener=function(t){t&&(window.removeEventListener(t.windowEventName,t.handler),t.registered=!1)},t.prototype.addListener=function(t,e){var n=this;this.listeners[t]||(this.listeners[t]=[]),this.listeners[t].push(e);var r=this.windowListeners[t];return r&&!r.registered&&this.addWindowListener(r),{remove:function(){n.removeListener(t,e)}}},t.prototype.removeListener=function(t,e){var n=this.listeners[t];if(n){var r=n.indexOf(e);this.listeners[t].splice(r,1),this.listeners[t].length||this.removeWindowListener(this.windowListeners[t])}},t.prototype.notifyListeners=function(t,e){var n=this.listeners[t];n&&n.forEach(function(t){return t(e)})},t.prototype.hasListeners=function(t){return!!this.listeners[t].length},t.prototype.registerWindowListener=function(t,e){var n=this;this.windowListeners[e]={registered:!1,windowEventName:t,pluginEventName:e,handler:function(t){n.notifyListeners(e,t)}}},t.prototype.requestPermissions=function(){return Capacitor.isNative?Capacitor.nativePromise(this.config.name,"requestPermissions",{}):Promise.resolve({results:[]})},t.prototype.load=function(){this.loaded=!0},t}(),c=function(t){for(var e=0,n=s.getPlugins();e<n.length;e++){var r=n[e];l(t,r)}},l=function(t,e){t.hasOwnProperty(e.config.name)&&!function(t){return t.config.platforms&&t.config.platforms.indexOf(Capacitor.platform)>=0}(e)||(t[e.config.name]=e)},p=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])},f=function(t){function o(){return t.call(this,{name:"Browser",platforms:["web"]})||this}return e(o,t),o.prototype.open=function(t){return n(this,void 0,void 0,function(){return r(this,function(e){return this._lastWindow=window.open(t.url,t.windowName||"_blank"),[2,Promise.resolve()]})})},o.prototype.prefetch=function(t){return n(this,void 0,void 0,function(){return r(this,function(t){return[2,Promise.resolve()]})})},o.prototype.close=function(){return n(this,void 0,void 0,function(){return r(this,function(t){return this._lastWindow&&this._lastWindow.close(),[2,Promise.resolve()]})})},o}(u),d=new f,h=function(t){function o(){return t.call(this,{name:"Camera",platforms:["web"]})||this}return e(o,t),o.prototype.getPhoto=function(t){return n(this,void 0,void 0,function(){var t=this;return r(this,function(e){return[2,new Promise(function(e,o){return n(t,void 0,void 0,function(){var t,i=this;return r(this,function(a){switch(a.label){case 0:return t=document.createElement("ion-pwa-camera-modal"),document.body.appendChild(t),[4,t.componentOnReady()];case 1:return a.sent(),t.addEventListener("onPhoto",function(a){return n(i,void 0,void 0,function(){var n,i;return r(this,function(r){switch(r.label){case 0:return null!==(n=a.detail)?[3,1]:(o(),[3,3]);case 1:return i=e,[4,this._getCameraPhoto(n)];case 2:i.apply(void 0,[r.sent()]),r.label=3;case 3:return t.dismiss(),[2]}})})}),t.present(),[2]}})})})]})})},o.prototype._getCameraPhoto=function(t){return new Promise(function(e,n){var r=new FileReader;r.readAsDataURL(t),r.onloadend=function(){e({base64Data:r.result,webPath:r.result,format:"jpeg"})},r.onerror=function(t){n(t)}})},o}(u),m=new h,g=function(t){function o(){return t.call(this,{name:"Clipboard",platforms:["web"]})||this}return e(o,t),o.prototype.write=function(t){return n(this,void 0,void 0,function(){return r(this,function(e){switch(e.label){case 0:return navigator.clipboard?t.string||t.url?[4,navigator.clipboard.writeText(t.string||t.label)]:[3,2]:[2,Promise.reject("Clipboard API not available in this browser")];case 1:return e.sent(),[3,3];case 2:if(t.image)return[2,Promise.reject("Setting images not supported on the web")];e.label=3;case 3:return[2,Promise.resolve()]}})})},o.prototype.read=function(t){return n(this,void 0,void 0,function(){var t,e,n,o;return r(this,function(r){switch(r.label){case 0:return navigator.clipboard?[4,navigator.clipboard.read()]:[2,Promise.reject("Clipboard API not available in this browser")];case 1:for(t=r.sent(),e=0,n=t.items;e<n.length;e++)if("text/plain"===(o=n[e]).type)return[2,Promise.resolve(o.getAs("text/plain"))];return[2,Promise.reject("Unable to get data from clipboard")]}})})},o}(u),v=new g,w=function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return e.forEach(function(e){if(e&&"object"==typeof e)for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])}),t},y=function(t){function n(){return t.call(this,{name:"Geolocation",platforms:["web"]})||this}return e(n,t),n.prototype.getCurrentPosition=function(t){var e=this;return new Promise(function(n,r){return e.requestPermissions().then(function(e){window.navigator.geolocation.getCurrentPosition(function(t){n(t)},function(t){r(t)},w({enableHighAccuracy:!0,timeout:1e4,maximumAge:0},t))})})},n.prototype.watchPosition=function(t,e){return""+window.navigator.geolocation.watchPosition(function(t){e(t)},function(t){e(null,t)},w({enableHighAccuracy:!0,timeout:1e4,maximumAge:0},t))},n.prototype.clearWatch=function(t){return window.navigator.geolocation.clearWatch(parseInt(t.id,10)),Promise.resolve()},n}(u),b=new y,P=function(t){function o(){return t.call(this,{name:"Device",platforms:["web"]})||this}return e(o,t),o.prototype.getInfo=function(){return n(this,void 0,void 0,function(){var t,e,n,o;return r(this,function(r){switch(r.label){case 0:t=navigator.userAgent,e=this.parseUa(t),n={},r.label=1;case 1:return r.trys.push([1,3,,4]),[4,navigator.getBattery()];case 2:return n=r.sent(),[3,4];case 3:return o=r.sent(),[3,4];case 4:return[2,Promise.resolve({model:e.model,platform:"web",appVersion:"",osVersion:e.osVersion,manufacturer:navigator.vendor,isVirtual:!1,batteryLevel:n.level,isCharging:n.charging,uuid:this.getUid()})]}})})},o.prototype.getLanguageCode=function(){return n(this,void 0,void 0,function(){return r(this,function(t){return[2,{value:navigator.language}]})})},o.prototype.parseUa=function(t){var e={},n=t.indexOf("(")+1,r=t.indexOf(") AppleWebKit");-1!==t.indexOf(") Gecko")&&(r=t.indexOf(") Gecko"));var o=t.substring(n,r);if(-1!==t.indexOf("Android"))e.model=o.replace("; wv","").split("; ").pop().split(" Build")[0],e.osVersion=o.split("; ")[1];else if(e.model=o.split("; ")[0],navigator.oscpu)e.osVersion=navigator.oscpu;else if(-1!==t.indexOf("Windows"))e.osVersion=o;else{var i=o.split("; ").pop().replace(" like Mac OS X","").split(" ");e.osVersion=i[i.length-1].replace(/_/g,".")}return e},o.prototype.getUid=function(){var t=window.localStorage.getItem("_capuid");return t||(t="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){var e=16*Math.random()|0;return("x"==t?e:3&e|8).toString(16)}),window.localStorage.setItem("_capuid",t),t)},o}(u),x=new P,C=function(t){function n(){return t.call(this,{name:"Share",platforms:["web"]})||this}return e(n,t),n.prototype.share=function(t){return navigator.share?navigator.share({title:t.title,text:t.text,url:t.url}):Promise.reject("Web Share API not available")},n}(u),E=new C,S=function(t){function o(){return t.call(this,{name:"Modals",platforms:["web"]})||this}return e(o,t),o.prototype.alert=function(t){return n(this,void 0,void 0,function(){return r(this,function(e){return window.alert(t.message),[2,Promise.resolve()]})})},o.prototype.prompt=function(t){return n(this,void 0,void 0,function(){var e;return r(this,function(n){return e=window.prompt(t.message,t.inputPlaceholder||""),[2,Promise.resolve({value:e,cancelled:null===e})]})})},o.prototype.confirm=function(t){return n(this,void 0,void 0,function(){var e;return r(this,function(n){return e=window.confirm(t.message),[2,Promise.resolve({value:e})]})})},o.prototype.showActions=function(t){return n(this,void 0,void 0,function(){var e=this;return r(this,function(o){return[2,new Promise(function(o,i){return n(e,void 0,void 0,function(){var e,n,i;return r(this,function(r){switch(r.label){case 0:return(e=document.querySelector("ion-action-sheet-controller"))||(e=document.createElement("ion-action-sheet-controller"),document.body.appendChild(e)),[4,e.componentOnReady()];case 1:return r.sent(),n=t.options.map(function(t,e){return{text:t.title,role:t.style&&t.style.toLowerCase()||"",icon:t.icon||"",handler:function(){o({index:e})}}}),[4,e.create({title:t.title,buttons:n})];case 2:return i=r.sent(),[4,i.present()];case 3:return r.sent(),[2]}})})})]})})},o}(u),A=new S,L=function(t){function n(){var e=t.call(this,{name:"Motion"})||this;return e.registerWindowListener("devicemotion","accel"),e.registerWindowListener("deviceorientation","orientation"),e}return e(n,t),n}(u),O=new L,W=function(t){function n(){var e=t.call(this,{name:"Storage",platforms:["web"]})||this;return e.KEY_PREFIX="_cap_",e}return e(n,t),n.prototype.get=function(t){var e=this;return new Promise(function(n,r){n({value:window.localStorage.getItem(e.makeKey(t.key))})})},n.prototype.set=function(t){var e=this;return new Promise(function(n,r){window.localStorage.setItem(e.makeKey(t.key),t.value),n()})},n.prototype.remove=function(t){var e=this;return new Promise(function(n,r){window.localStorage.removeItem(e.makeKey(t.key)),n()})},n.prototype.keys=function(){var t=this;return new Promise(function(e,n){e({keys:Object.keys(localStorage).filter(function(e){return t.isKey(e)}).map(function(e){return t.getKey(e)})})})},n.prototype.clear=function(){var t=this;return new Promise(function(e,n){Object.keys(localStorage).filter(function(e){return t.isKey(e)}).forEach(function(t){return window.localStorage.removeItem(t)}),e()})},n.prototype.makeKey=function(t){return this.KEY_PREFIX+t},n.prototype.isKey=function(t){return 0===t.indexOf(this.KEY_PREFIX)},n.prototype.getKey=function(t){return t.substr(this.KEY_PREFIX.length)},n}(u),I=new W,T=function(t){function o(){return t.call(this,{name:"Toast",platforms:["web"]})||this}return e(o,t),o.prototype.show=function(t){return n(this,void 0,void 0,function(){var e,n,o;return r(this,function(r){switch(r.label){case 0:return(e=document.querySelector("ion-toast-controller"))||(e=document.createElement("ion-toast-controller"),document.body.appendChild(e)),[4,e.componentOnReady()];case 1:return r.sent(),n=3e3,t.duration&&(n="long"===t.duration?5e3:3e3),[4,e.create({position:"bottom",message:t.text,duration:n})];case 2:return o=r.sent(),[4,o.present()];case 3:return[2,r.sent()]}})})},o}(u),_=new T;c(i);return t.Plugins=i,t.registerWebPlugin=function(t){l(i,t)},t.BrowserPluginWeb=f,t.Browser=d,t.CameraPluginWeb=h,t.Camera=m,t.ClipboardPluginWeb=g,t.Clipboard=v,t.GeolocationPluginWeb=y,t.Geolocation=b,t.DevicePluginWeb=P,t.Device=x,t.SharePluginWeb=C,t.Share=E,t.ModalsPluginWeb=S,t.Modals=A,t.MotionPluginWeb=L,t.Motion=O,t.StoragePluginWeb=W,t.Storage=I,t.ToastPluginWeb=T,t.Toast=_,t.WebPluginRegistry=a,t.WebPlugins=s,t.WebPlugin=u,t.mergeWebPlugins=c,t.mergeWebPlugin=l,t}({});
//# sourceMappingURL=capacitor.js.map