(function() {
  var app;

  app = angular.module('myapp', ['ui.router', 'ngSanitize', 'restangular', 'pascalprecht.translate', 'ngRoute', 'ngLocale', 'ngAnimate']);

  app.config(function(RestangularProvider) {

    /*
    RestangularProvider.setBaseUrl('http://eagletest.media.test.eagleplatform.com/api/v2')
    RestangularProvider.setDefaultRequestParams({ auth_token: 'i7pj2sYYnsPE8jExAx5z'})
    RestangularProvider.setRequestSuffix('.json')
    RestangularProvider.setDefaultHeaders({'Content-Type': 'application/json'});
    
    RestangularProvider.addResponseInterceptor (data, operation, what, url, response, deferred) ->
    
       * фича для выдачи списка видео
      if_records = url.length - url.lastIndexOf('records')
      if (if_records == 7)
        data.data.total_pages = data.total_pages
        data.data.total_records = data.total_records
    
    
      return data.data
    
    
    console.log("Restangular Initiated")
    RestangularProvider.addRequestInterceptor (elem, operation, what, url) ->
      retElem = elem;
      if operation == 'post' or operation == 'put'
        wrapper = {};
        wrapper[what.substring(0, what.length - 1)] = elem;
        retElem = wrapper;
      return retElem;
    
    
    app.config ($translateProvider) ->
    $translateProvider.useStaticFilesLoader({
      prefix: '/locales/',
      suffix: '.json'
    });
    locale = $("body").attr("locale")
    locale = "ru" if !locale
    $translateProvider.preferredLanguage(locale);
     */
  });

}).call(this);

(function() {
  angular.module('myapp').config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: true
    });
    $urlRouterProvider.otherwise("/passion");
    return $stateProvider.state('vod', {
      url: '/passion',
      abstract: false,
      views: {
        layout: {
          templateUrl: 'passion/assets/views/main.html',
          controller: 'VodCtrl'
        }
      }
    });
  });

}).call(this);

(function() {
  angular.module("myapp").controller("VodCtrl", ["$scope", "Restangular", "$timeout", "$filter", "$location", function($scope, Restangular, $timeout, $filter, $location) {}]);

}).call(this);
