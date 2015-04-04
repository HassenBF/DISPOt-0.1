/**
 * Created by hbenfred on 07/03/2015.
 */
// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', [
    'ionic',
    'starter.login',
    'starter.main',
    'starter.collaborators',
    'starter.collaborators.details',
    'starter.services',
    'starter.filters'

])

    .run(function($ionicPlatform) {
        $ionicPlatform.ready(function() {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if(window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if(window.StatusBar) {
                StatusBar.styleDefault();
            }
        });
    })

    .config(function($stateProvider, $urlRouterProvider,$ionicConfigProvider) {

        $stateProvider

            .state('app', {
                url: "/app",
                abstract:true,
                templateUrl: "app/app.html"

            });


        $ionicConfigProvider.backButton.previousTitleText(false).text('');


        $urlRouterProvider.otherwise('app/main');

    });