// cordova-plugin-contacts
'use strict';
angular.module('ngCordova')
.constant('$cordovaContactsError', {
    UNKNOWN_ERROR: 0,
    INVALID_ARGUMENT_ERROR: 1,
    TIMEOUT_ERROR: 2,
    PENDING_OPERATION_ERROR: 3,
    IO_ERROR: 4,
    NOT_SUPPORTED_ERROR: 5,
    OPERATION_CANCELLED_ERROR: 6,
    PERMISSION_DENIED_ERROR: 20
})
.factory('$cordovaContacts', ['$q', '$cordova', function($q, $cordova) {
    return {
        create: $cordova.$q(function(contact, $q) {
            $q.resolve(window.navigator.contacts.create(contact));
        }),
        find: $cordova.$q(function(fields, options, $q) {
            window.navigator.contacts.find(fields || ['id', 'displayName'], $q.resolve, $q.reject, options);
        }),
        pickContact: $cordova.$q(function($q) {
            window.navigator.contacts.pickContact($q.resolve, $q.reject);
        })
    };
}]);
