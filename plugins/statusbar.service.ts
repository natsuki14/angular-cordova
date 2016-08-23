// cordova-plugin-statusbar
import { CordovaService } from '../cordova.service';

export class CordovaStatusbarService extends CordovaService {
    overlaysWebView(bool: boolean): Promise<any> {
        return this.deviceready().then((): Promise<any> => {
            return new Promise<any>((resolve, reject): void => {
                resolve((<any>window).StatusBar.overlaysWebView(bool));
            });
        });
    }
    styleDefault(): Promise<any> {
        return this.deviceready().then((): Promise<any> => {
            return new Promise<any>((resolve, reject): void => {
                resolve((<any>window).StatusBar.styleDefault());
            });
        });
    }
    styleLightContent(): Promise<any> {
        return this.deviceready().then((): Promise<any> => {
            return new Promise<any>((resolve, reject): void => {
                resolve((<any>window).StatusBar.styleLightContent());
            });
        });
    }
    styleBlackTranslucent(): Promise<any> {
        return this.deviceready().then((): Promise<any> => {
            return new Promise<any>((resolve, reject): void => {
                resolve((<any>window).StatusBar.styleBlackTranslucent());
            });
        });
    }
    styleBlackOpaque(): Promise<any> {
        return this.deviceready().then((): Promise<any> => {
            return new Promise<any>((resolve, reject): void => {
                resolve((<any>window).StatusBar.styleBlackOpaque());
            });
        });
    }
    backgroundColorByName(color: string): Promise<any> {
        return this.deviceready().then((): Promise<any> => {
            return new Promise<any>((resolve, reject): void => {
                resolve((<any>window).StatusBar.backgroundColorByName(color));
            });
        });
    }
    backgroundColorByHexString(colorHex: string): Promise<any> {
        return this.deviceready().then((): Promise<any> => {
            return new Promise<any>((resolve, reject): void => {
                resolve((<any>window).StatusBar.backgroundColorByHexString(colorHex));
            });
        });
    }
    hide(): Promise<any> {
        return this.deviceready().then((): Promise<any> => {
            return new Promise<any>((resolve, reject): void => {
                resolve((<any>window).StatusBar.hide());
            });
        });
    }
    show(): Promise<any> {
        return this.deviceready().then((): Promise<any> => {
            return new Promise<any>((resolve, reject): void => {
                resolve((<any>window).StatusBar.show());
            });
        });
    }
    isVisible(): Promise<any> {
        return this.deviceready().then((): Promise<any> => {
            return new Promise<any>((resolve, reject): void => {
                resolve((<any>window).StatusBar.isVisible());
            });
        });
    }
}
