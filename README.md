# angular-cordova
This library allows you to access Cordova and Cordova Plugins using Angular.

All official Cordova Plugins are supported. 3rdparty plugins are available in plugins/3rdparty.

## Key features
* Buffers method calls and waits for the deviceready event automatically
* Call plugins before they are loaded - load your app as fast as possible
* All methods return promises

## Installation
Include src/cordova.js in your project along with any plugins that you use from src/plugins.

## API
All apis follow the official specification closely, as outlined [here](https://cordova.apache.org/docs/en/latest/#plugin-apis). 
The main difference is that all methods return promises and can be called before deviceready.

Example:
```
navigator.geolocation.getCurrentPosition(function(response) {
    console.log("latitude: " + response.coords.latitude);
    console.log("longitude: " + response.coords.longitude);
}, function(error) {
    console.error(error);
});
```

Becomes:
```
$cordovaGeolocation.getCurrentPosition().then(function(response) {
    console.log("latitude: " + response.coords.latitude);
    console.log("longitude: " + response.coords.longitude);
}, function(error) {
    console.error(error);
});
```

## Support
<a href="https://flattr.com/submit/auto?fid=g3ozze&url=https%3A%2F%2Fgithub.com%2Farnesson%2Fangular-cordova" target="_blank"><img src="https://button.flattr.com/flattr-badge-large.png" alt="Flattr this" title="Flattr this" border="0"></a>
