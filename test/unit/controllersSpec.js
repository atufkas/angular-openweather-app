'use strict';

/* jasmine specs for controllers go here */

describe('OpenWeather App controllers', function(){

  beforeEach(module('openWeatherApp.controllers'));
  beforeEach(module('openWeatherApp.services'));
  beforeEach(module('iso-3166-country-codes'));

  describe('OpenWeatherCtrl', function() {
    var $scope, ctrl, $httpBackend;

    beforeEach(module('openWeatherApp'));

    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('http://api.openweathermap.org/data/2.5').
        respond([{forecast: {city: {name: 'Hamburg'} } }]);

      $scope = $rootScope.$new();
      ctrl = $controller('OpenWeatherCtrl', { $scope: $scope });
    }));

//    it('should set the default value of iconBaseUrl', function() {
//      expect($scope.iconBaseUrl).toBe('http://openweathermap.org/img/w/');
//    });
  });
});
