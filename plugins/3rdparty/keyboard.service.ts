// cordova-plugin-keyboard
import { CordovaService } from '../../cordova.service';

export class CordovaKeyboardService extends CordovaService {
    constructor() {
        super();
        this.register(window, 'CordovaKeyboardService:keyboardDidShow');
        this.register(window, 'CordovaKeyboardService:keyboardDidHide');
        this.register(window, 'CordovaKeyboardService:keyboardWillShow');
        this.register(window, 'CordovaKeyboardService:keyboardWillHide');
        this.register(window, 'CordovaKeyboardService:keyboardHeightWillChange');
    }

    shrinkView(bool: boolean): Promise<any> {
        return this.deviceready().then((): Promise<any> => {
            return new Promise<any>((resolve, reject): void => {
                resolve((<any>window).Keyboard.shrinkView(bool));
            });
        });
    }
    hideFormAccessoryBar(bool: boolean): Promise<any> {
        return this.deviceready().then((): Promise<any> => {
            return new Promise<any>((resolve, reject): void => {
                resolve((<any>window).Keyboard.hideFormAccessoryBar(bool));
            });
        });
    }
    disableScrollingInShrinkView(bool: boolean): Promise<any> {
        return this.deviceready().then((): Promise<any> => {
            return new Promise<any>((resolve, reject): void => {
                resolve((<any>window).Keyboard.disableScrollingInShrinkView(bool));
            });
        });
    }
    hide(): Promise<any> {
        return this.deviceready().then((): Promise<any> => {
            return new Promise<any>((resolve, reject): void => {
                resolve((<any>window).Keyboard.hide());
            });
        });
    }
    show(): Promise<any> {
        return this.deviceready().then((): Promise<any> => {
            return new Promise<any>((resolve, reject): void => {
                resolve((<any>window).Keyboard.show());
            });
        });
    }
    isVisible(): Promise<any> {
        return this.deviceready().then((): Promise<any> => {
            return new Promise<any>((resolve, reject): void => {
                resolve((<any>window).Keyboard.isVisible());
            });
        });
    }
    automaticScrollToTopOnHiding(bool: boolean): Promise<any> {
        return this.deviceready().then((): Promise<any> => {
            return new Promise<any>((resolve, reject): void => {
                resolve((<any>window).Keyboard.automaticScrollToTopOnHiding = bool);
            });
        });
    }
}
