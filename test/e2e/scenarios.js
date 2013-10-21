'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('OpenWeather App', function() {

  beforeEach(function() {
    browser().navigateTo('../../app/index.html');
  });


  it('should automatically redirect to /forecast when location hash/fragment is empty', function() {
    expect(browser().location().url()).toBe("/forecast");
  });


  describe('Forecast view', function() {

    beforeEach(function() {
      browser().navigateTo('#/forecast');
    });

    it('should render forecast when user navigates to /forecast', function() {
      expect(element('[ng-view] form button[type="submit"]').text()).toMatch(/Search!/);
    });

    it('should map the value of an "instant city forecast" button to the input field', function() {
      element('[ng-view] form .btn-group > button:first-child').click();
      expect(element('[ng-view] form input#location').attr('value')).toBe('Hamburg');
    });
  });
});
