# angular-cordova
This library allows you to access Cordova and Cordova Plugins using Angular.

All official Cordova Plugins are supported. 3rdparty plugins are available in plugins/3rdparty.

## Key features
* All methods return promises
* All method calls are automatically buffered and executed after deviceready
* Call plugins before they are loaded
* Load your app as fast as possible, don't wait for deviceready

## Installation
1) Include src/cordova.js in your project along with any plugins that you use from src/plugins.

2) Add ngCordova to your app:
```
angular.module('app', ['ngCordova', ...])
```

## API
All apis follow the official specification closely, as outlined [here](https://cordova.apache.org/docs/en/latest/#plugin-apis). 

### Calling methods

Example getting the current position using the geolocation plugin.

Cordova:
```
navigator.geolocation.getCurrentPosition(function(response) {
    console.log("latitude: " + response.coords.latitude);
    console.log("longitude: " + response.coords.longitude);
}, function(error) {
    console.error(error);
});
```

Angular:
```
$cordovaGeolocation.getCurrentPosition().then(function(response) {
    console.log("latitude: " + response.coords.latitude);
    console.log("longitude: " + response.coords.longitude);
}, function(error) {
    console.error(error);
});
```

### Event listeners

Example listening to network changes using the network information plugin.

Cordova:
```
document.addEventListener("offline", function() {
    console.log("device is offline");
}, false);
```

Angular:
```
$cordovaNetworkInformation.$on("offline", function() {
    console.log("device is offline");
});
```

### deviceready

If you still need to hook in to deviceready manually, $cordova also has an $on interface:

```
$cordova.$on("deviceready", function() {
    console.log("we have liftoff!");
});
```
