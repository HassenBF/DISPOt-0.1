/**
 * Created by hbenfred on 07/03/2015.
 */

angular.module('starter.main',[])

    .config(function($stateProvider) {

        $stateProvider

            .state('app.main', {
                url: "/main",

                templateUrl: "app/main/main.html",
                controller : 'mainCtrl'

            });

    })

    .controller('mainCtrl',['$scope',function ($scope) {

    }]);