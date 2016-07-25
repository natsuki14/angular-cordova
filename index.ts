import { Injectable } from '@angular/core';

@Injectable()
export class CordovaService {
    private callbacks: Array<any> = [];
    private listeners: any = {};
    private events: any = {};
    private ready: Boolean = false;
    public platformId: string;

    constructor() {
        this.platformId = (<any>window).cordova.platformId;

        this.register(document, '$cordova:deviceready');

        this.on('$cordova:deviceready', (): void => {
            this.ready = true;

            for (var i = 0; i < this.callbacks.length; i++) {
                this.callbacks[i]();
            }
        });
    }

    public register(element: any, event: string): void {
        if (event.split(":").length !== 2) {
            throw new Error('angular-cordova: event "' + String(event) + '" is invalid. the event should be in the format $module:event, e.g. $cordova:deviceready');
        }

        if (this.listeners[event]) {
            throw new Error('angular-cordova: event "' + String(event) + '" is already registered');
        }

        this.listeners[event] = (...args: any[]): void => {
            if (this.events[event]) {
                for (var i = 0; i < this.events[event].length; i++) {
                    this.events[event][i].apply(this.events[event][i], args || []);
                }
            }
        };

        element.addEventListener(event.split(":")[1], this.listeners[event], false);
    }

    public unregister(element: any, event: string): void {
        if (!this.listeners[event]) {
            throw new Error('angular-cordova: "' + String(event) + '" is not a registered event');
        }

        element.removeEventListener(event.split(":")[1], this.listeners[event], false);
    }

    public on(event: string, fn: () => void, prefix?: string): void {
        if (!prefix && event && event.split(":").length === 0) {
            prefix = "$cordova";
        }

        if (prefix) {
            event = prefix + ":" + event;
        }

        if (event.split(":").length !== 2) {
            throw new Error('angular-cordova: event "' + String(event) + '" is invalid. the event should be in the format $module:event, e.g. $cordova:deviceready');
        }

        if (!this.listeners[event]) {
            throw new Error('angular-cordova: "' + String(event) + '" is not a registered event');
        }

        if (!this.events[event]) {
            this.events[event] = [];
        }

        this.events[event].push(fn);
    }

    public deviceready(): Promise<any> {
        return new Promise<any>((resolve, reject): void => {
            if (this.ready) {
                resolve();
            } else {
                this.callbacks.push(resolve);
            }
        });
    }
}
