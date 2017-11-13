// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers','oc.lazyLoad','ionic-ratings'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('tab', {
      url: '/tab',
      abstract: true,
      templateUrl: 'templates/tabs.html'
    })

    .state('tab.home', {
      url: '/home',
      views: {
        'tab-home': {
          templateUrl: 'templates/home.html'
        }
      }
    })
    .state('tab.helper',{
      url:'/helper',
      views:{
        'tab-helper':{
          templateUrl:'templates/helper.html'
        }
      }
    })
    .state('tab.status',{
      url:'/status',
      cache:false,
      views: {
        'tab-helper': {
          templateUrl:'templates/status.html',
          controller:'statusCtr'
        }
      }
    })
    .state('tab.once',{
      url:'/once',
      cache:false,
      views: {
        'tab-helper': {
          templateUrl:'templates/once.html',
          controller:'onceCtr'
        }
      }
    })
    .state('tab.total',{
      url:'/total',
      cache:false,
      views: {
        'tab-helper': {
          templateUrl:'templates/total.html',
          controller:'totalCtr'
        }
      }
    })
    .state('tab.history',{
      url:'/history',
      views: {
        'tab-helper': {
          templateUrl:'templates/history.html',
          controller:'historyCtr'
        }
      }
    })
    .state('tab.setting',{
      url:'/setting',
      views:{
        'tab-setting':{
          templateUrl:'templates/setting.html'
        }
      }
    })
    .state('tab.low',{
      url:'/low',
      views:{
        'tab-setting':{
          templateUrl:'templates/low.html',
          controller:'lowCtr'
        }
      }
    })
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/home');
});
