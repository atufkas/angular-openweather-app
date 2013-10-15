'use strict';

/* Filters */

angular.module('openWeatherApp.filters', [])

  .filter('interpolate', ['version', function(version) {
    return function(text) {
      return String(text).replace(/\%VERSION\%/mg, version);
    }
  }])

  .filter('placeholder', [function() {
    return function (input,phvalue) {
      return (angular.isUndefined(input) || input == '') ? phvalue : input;
    };
  }])
