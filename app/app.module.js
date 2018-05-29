'use strict';

// Define the `phonecatApp` module...
angular.module('phonecatApp',
[
    'ngRoute',
    'phoneDetail',
    'core',
    // ...which depends on the `phoneList` module.
    'phoneList'
]);
