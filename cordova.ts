import { Injectable } from '@angular/core';

export namespace Cordova {
    let callbacks: Array<any> = [];
    let listeners: any = {};
    let events: any = {};
    let ready: Boolean = false;
    export let platformId: string = (<any>window).cordova.platformId;

    register(document, 'CordovaService:deviceready');

     on('CordovaService:deviceready', (): void => {
        ready = true;

        for (var i = 0; i < callbacks.length; i++) {
            callbacks[i]();
        }
    });

    export function register(element: any, event: string): void {
        if (event.split(":").length !== 2) {
            throw new Error('angular-cordova: event "' + String(event) + '" is invalid. the event should be in the format Service:event, e.g. CordovaService:deviceready');
        }

        if (listeners[event]) {
            throw new Error('angular-cordova: event "' + String(event) + '" is already registered');
        }

        listeners[event] = (...args: any[]): void => {
            if (events[event]) {
                for (var i = 0; i < events[event].length; i++) {
                    events[event][i].apply(events[event][i], args || []);
                }
            }
        };

        element.addEventListener(event.split(":")[1], listeners[event], false);
    }

    export function unregister(element: any, event: string): void {
        if (!listeners[event]) {
            throw new Error('angular-cordova: "' + String(event) + '" is not a registered event');
        }

        element.removeEventListener(event.split(":")[1], listeners[event], false);
    }

    export function on(event: string, fn: () => void, prefix?: string): void {
        if (!prefix && event && event.split(":").length === 0) {
            prefix = "CordovaService";
        }

        if (prefix) {
            event = prefix + ":" + event;
        }

        if (event.split(":").length !== 2) {
            throw new Error('angular-cordova: event "' + String(event) + '" is invalid. the event should be in the format Service:event, e.g. CordovaService:deviceready');
        }

        if (!listeners[event]) {
            throw new Error('angular-cordova: "' + String(event) + '" is not a registered event');
        }

        if (!events[event]) {
            events[event] = [];
        }

        events[event].push(fn);
    }

    export function deviceready(): Promise<any> {
        return new Promise<any>((resolve, reject): void => {
            if (ready) {
                resolve();
            } else {
                callbacks.push(resolve);
            }
        });
    }
}

@Injectable()
export class CordovaService {
    public register = Cordova.register;
    public unregister = Cordova.unregister;
    public on = Cordova.on;
    public deviceready = Cordova.deviceready;
    public platformId = Cordova.platformId;
}
