# angular-openweather-app - CHANGELOG

## 0.2.1

Date: ?

- chore: Added missing npm fields "repository" and "license".

## 0.2.0

Date: February 19, 2018

- chore (ci): Added integration with Travis CI.
- doc: Corrected dependency on angular 1.2.32, added a small section about
running test scripts and added new top note to README
- chore: corrected module dep to correct package name phantomjs-prebuilt
- chore: updated bundled angularjs lib from angular-1.2.0-rc.2 to
angular-1.2.32 (latest of the 1.2 release series) + updated and fixed
dependencies on karma and jasmine modules so that tests would run and pass again
- chore: Reformatted this changelog to move towards compatibility with
[Conventional Commits Specification](https://conventionalcommits.org/) and [progress-keeper](https://github.com/atufkas/progress-keeper) :-)

## 0.1.6

Date: October 30, 2015

- fix: openweathermap api needs query parameter APPID (x-api-key not
  sufficient any more)
- chore: corrected some meta package descriptions

## 0.1.5

Date: August 25, 2015

- fix: openweathermap api 2.5 doesn't recognize query param/value "mode=jsonp"
any more (returned status 400)
- addition: added example locations "San Francisco" and "Athens" to quick
selection bar
- chore: renamed label(s) "Storm Alarm" again to more neutral "Wind over
Northern Germany"˘

## 0.1.4

Date: January 9, 2015

- change: renamed view partial file and variables for storm "Xaver" to more
neutral "storm"
- change: renamed "Storm Alarm!" link in header bar so they refer to storms
"Elon" and "Felix" (storms of Jan, 2015 :)
- feat: added "fork me on github" ribbon
- feat: added this changelog


## 0.1.3

Date: October 13, 2013

feat: Initial version providing sample weather forecast app that connects with
openweathermap API (see README.md).
