[![Build Status](https://travis-ci.org/arnesson/angular-cordova.svg?branch=master)](https://travis-ci.org/arnesson/angular-cordova)

# angular-cordova
This library allows you to access Cordova and Cordova Plugins using Angular and Typescript.

NPM: https://www.npmjs.com/package/angular-cordova

## Key features
* All methods return Observables
* All method calls are automatically buffered and executed after deviceready
* Call plugins before they are loaded
* Load your app as fast as possible, no need to wait for deviceready

## Installation
This package is distributed as source files and not as a library, because of this you need to add the files to your tsconfig.json file:

```
{
    ...
    "include": [
        "src/**/*",
        "./node_modules/angular-cordova/**/*"
    ],
}
```

## API structure
All apis follow the official specification closely, as outlined [here](https://cordova.apache.org/docs/en/latest/#plugin-apis). 

### Example usage

Efficient way of getting the current position using the geolocation plugin.

```
import { GeolocationService } from 'angular-cordova/plugin/geolocation';

@Component({
  selector: 'demo',
  providers: [
    GeolocationService
  ]
})
export class DemoComponent {
  private sub: any;
  private position: any;
  
  constructor(
    private geolocationService: GeolocationService
  ) {}

  getCurrentPosition(): Observable<any> {
    if (!this.sub) {
      this.sub = this.geolocationService.watchPosition().map((res) => {
        // console.log("watchPosition update");
        this.position = {
          lat: res.coords.latitude,
          lng: res.coords.longitude
        };
      }).catch(() => {
        return Observable.of({});
      }).share();
      this.sub.subscribe(() => {});
    }

    if (this.position) {
      return Observable.of(this.position);
    } else {
      return this.sub.first().timeout(10000).catch(() => {
        return Observable.of({});
      });
    }
  }
}
```

### Event listeners

Example listening to keyboard changes using the keyboard plugin.

```
import { KeyboardService } from 'angular-cordova/plugin/keyboard';

KeyboardService.keyboardDidShow.subscribe(() => {
    console.log("keyboardDidShow");
});
```

### deviceready

If you still need to hook in to deviceready manually, you can do so:

```
import { Cordova } from 'angular-cordova';

Cordova.deviceready.subscribe(() => {
    console.log("we are ready!");
});
```
