// https://github.com/arnesson/cordova-plugin-facebook
import { CordovaService } from '../../cordova';

export class CordovaFacebookService extends CordovaService {
    login(permissions?: Array<any>): Promise<any> {
        return this.deviceready().then((): Promise<any> => {
            return new Promise<any>((resolve, reject): void => {
                (<any>window).facebookConnectPlugin.login(permissions, resolve, reject);
            });
        });
    }
    showDialog(options?: Array<any>): Promise<any> {
        return this.deviceready().then((): Promise<any> => {
            return new Promise<any>((resolve, reject): void => {
                (<any>window).facebookConnectPlugin.showDialog(options, resolve, reject);
            });
        });
    }
    api(path: string, permissions?: Array<any>): Promise<any> {
        return this.deviceready().then((): Promise<any> => {
            return new Promise<any>((resolve, reject): void => {
                (<any>window).facebookConnectPlugin.api(path, permissions, resolve, reject);
            });
        });
    }
    getAccessToken(): Promise<any> {
        return this.deviceready().then((): Promise<any> => {
            return new Promise<any>((resolve, reject): void => {
                (<any>window).facebookConnectPlugin.getAccessToken(resolve, reject);
            });
        });
    }
    getLoginStatus(): Promise<any> {
        return this.deviceready().then((): Promise<any> => {
            return new Promise<any>((resolve, reject): void => {
                (<any>window).facebookConnectPlugin.getLoginStatus(resolve, reject);
            });
        });
    }
    logout(): Promise<any> {
        return this.deviceready().then((): Promise<any> => {
            return new Promise<any>((resolve, reject): void => {
                (<any>window).facebookConnectPlugin.logout(resolve, reject);
            });
        });
    }
    logEvent(name: string, params: Array<any>, value: number): Promise<any> {
        return this.deviceready().then((): Promise<any> => {
            return new Promise<any>((resolve, reject): void => {
                (<any>window).facebookConnectPlugin.logEvent(name, params, value, resolve, reject);
            });
        });
    }
    logPurchase(value: number, currency: string): Promise<any> {
        return this.deviceready().then((): Promise<any> => {
            return new Promise<any>((resolve, reject): void => {
                (<any>window).facebookConnectPlugin.logPurchase(value, currency, resolve, reject);
            });
        });
    }
    appInvite(options?: Array<any>): Promise<any> {
        return this.deviceready().then((): Promise<any> => {
            return new Promise<any>((resolve, reject): void => {
                (<any>window).facebookConnectPlugin.appInvite(options, resolve, reject);
            });
        });
    }
    getDeferredApplink(): Promise<any> {
        return this.deviceready().then((): Promise<any> => {
            return new Promise<any>((resolve, reject): void => {
                (<any>window).facebookConnectPlugin.getDeferredApplink(resolve, reject);
            });
        });
    }
    activateApp(): Promise<any> {
        return this.deviceready().then((): Promise<any> => {
            return new Promise<any>((resolve, reject): void => {
                (<any>window).facebookConnectPlugin.activateApp(resolve, reject);
            });
        });
    }
}
