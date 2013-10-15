'use strict';

/* Controllers */

angular.module('openWeatherApp.controllers', [])

  //
  // Controller for "open weather map" data mapping
  //
  .controller('OpenWeatherCtrl', ['$scope','openWeatherMap',function($scope,openWeatherMap) {

    var tstamp = new Date();
    tstamp.setHours(0,0,0,0);
    var fcDate = Math.round(tstamp.getTime() / 1000);
//    fcDate.setHours(0,0,0,0);

    $scope.hasState = '';
    $scope.iconBaseUrl = 'http://openweathermap.org/img/w/';

    // Fetch "default" location forecast data
    $scope.forecast = openWeatherMap.queryForecastDaily({
      location: 'Hamburg'
    });

    // Get forecast data for a given location string
    $scope.getForecastByLocation = function() {

      $scope.message = '';
      $scope.forecast = {};

      if ($scope.location == '' || $scope.location == undefined) {
        $scope.hasState = 'has-warning';
        $scope.message = 'Please provide a location...';
        return;
      }

      $scope.hasState = 'has-success';

      $scope.forecast = openWeatherMap.queryForecastDaily({
        location: $scope.location
      });
    };

    // Get icon image url
    $scope.getIconImageUrl = function(iconName) {
      return (iconName ? $scope.iconBaseUrl + iconName + '.png' : '');
    }
  }])
