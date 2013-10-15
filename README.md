# angular-openweather-app — seeding an AngularJS weather app

This is a small AngularJS app that makes usage of the [OpenWeatherMap](http://openweathermap.org/) API for displaying weather data and forecasts
based on a given location (city).

This project serves as an example app I refer to within an article/post I'm going to publish for a German
web technology magazine and in my blog.

angular-openweather-app is build upon:

* AngularJS v1.2.0-rc.2
* Bootstrap v3.0.0

Points of interests / What is this app showing to those interested in AngularJS?

* Building an angular weather app based on OpenWeatherMap (see "Contribute")
* Bootstrapping an AngularJS app: Basic view(s), ng-app, ng-view
* Defining a controller for handling the weather data $scope
* Defining a service for fetching weather data from openweathermap.com via JSONP
* Defining a custom directive for instantly embedding kind of "weather data widget"
* Setting up unit and e2e-tests with karma/jasmine

The app structure is based on the [angular-seed](https://github.com/angular/angular-seed)
project.


## Installation

### Clone repository and install dependencies

via git and npm:

```
$ git clone git@github.com:atufkas/angular-openweather-app.git [my-app-name]
$ cd [my-app-name]
$ npm install
```

### Run application via server

(see also [angular-seed docs](https://github.com/angular/angular-seed))

You can pick one of these options:

* serve this repository with a webserver of-your-choice
* install node.js and run `scripts/web-server.js`

Then navigate your browser to `http://localhost:<port>/app/index.html` to see the app running in
your browser.


## Heads up! Related project "angular-openweather"

Setting up a service and directive for handling OpenWeatherMap data inspired me to extract those parts
and put it into a separate angular module-project called simply `angular-openweather` (coming soon).
It will probably be included as a dependency by this project later on. The original version of this app
I especially refer to in my post/article will always be available under the git tag tags/article-state.


## Contribute!

Ideas, suggestions and pull requests are welcome. Someone willing to suggest a fancy (responsive) design
for desktop and mobile use?


### Todo

* Make use (and parse) more provided weather data (+ add filters, formatting)
* Internationalization / Localization
* Provide "use current location" and fetch data via lat/lon
* Build a view with n-day-forecast in typical weather app style
* Improve UI/UX by integrating a fancy design, transitions, effects


## License

[The MIT License](http://opensource.org/licenses/MIT)

All data provided by the great service and API of [OpenWeatherMap](http://openweathermap.org/).

Copyright (c) 2013 Matthias Lienau &lt;matthias@mlienau.de&gt;