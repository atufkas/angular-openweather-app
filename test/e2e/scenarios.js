'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('my app', function() {

  beforeEach(function() {
    browser().navigateTo('../../app/index.html');
  });


  it('should automatically redirect to /forecast when location hash/fragment is empty', function() {
    expect(browser().location().url()).toBe("/forecast");
  });


  describe('forecast', function() {

    beforeEach(function() {
      browser().navigateTo('#/forecast');
    });


    it('should render forecast when user navigates to /forecast', function() {
      expect(element('[ng-view] form div label').text()).
        toMatch(/Stadt oder Ort.../);
    });

  });

  describe('view2', function() {

    beforeEach(function() {
      browser().navigateTo('#/view2');
    });


    it('should render view2 when user navigates to /view2', function() {
      expect(element('[ng-view] p:first').text()).
        toMatch(/partial for view 2/);
    });

  });
});
