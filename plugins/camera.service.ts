// cordova-plugin-camera
import { CordovaService } from '../cordova.service';

export class CordovaCameraDestinationType {
    public static get DATA_URL(): number { return 0; }
    public static get FILE_URI(): number { return 1; }
    public static get NATIVE_URI(): number { return 2; }
}
export class CordovaCameraEncodingType {
    public static get JPEG(): number { return 0; }
    public static get PNG(): number { return 1; }
}
export class CordovaCameraMediaType {
    public static get PICTURE(): number { return 0; }
    public static get VIDEO(): number { return 1; }
    public static get ALLMEDIA(): number { return 2; }
}
export class CordovaCameraPictureSourceType {
    public static get PHOTOLIBRARY(): number { return 0; }
    public static get CAMERA(): number { return 1; }
    public static get SAVEDPHOTOALBUM(): number { return 2; }
}
export class CordovaCameraPopoverArrowDirection {
    public static get ARROW_UP(): number { return 1; }
    public static get ARROW_DOWN(): number { return 2; }
    public static get ARROW_LEFT(): number { return 4; }
    public static get ARROW_RIGHT(): number { return 8; }
    public static get ARROW_ANY(): number { return 15; }
}
export class CordovaCameraCameraDirection {
    public static get BACK(): number { return 0; }
    public static get FRONT(): number { return 1; }
}

export class CordovaCameraService extends CordovaService {
    getPicture(options?: Array<any>): Promise<any> {
        return this.deviceready().then((): Promise<any> => {
            return new Promise<any>((resolve, reject): void => {
                (<any>window).navigator.camera.getPicture(resolve, reject, options);
            });
        });
    }
    cleanup(): Promise<any> {
        return this.deviceready().then((): Promise<any> => {
            return new Promise<any>((resolve, reject): void => {
                (<any>window).navigator.camera.cleanup(resolve, reject);
            });
        });
    }
}
