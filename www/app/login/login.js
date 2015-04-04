
angular.module('starter.login',[])

    .config(function($stateProvider) {

        $stateProvider

            .state('app.login', {
                url: "/login",
                templateUrl: "app/login/login.html",
                controller :'loginCtrl'


            });

    })

.controller('loginCtrl',['$scope','$state','$location',function ($scope,$location) {

        $scope.login = function (){
            $location.path('#/main');
            console.log("dqsdqsdqsdsqdsq");
        }
}]);