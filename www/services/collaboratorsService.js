/**
 * Created by Hassen on 10/03/2015.
 */
angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
    .factory('collaboratorsService',['$http','$q', function($http,$q) {


        // Some fake testing data
        var urlBase ="data/test_data.json";
        var collaboratorsJSON =[];
        var collaborators ;

        return {
            all: function() {
                return collaborators;

            },

            getAll : function() {
                return $http.get(urlBase)
                    .success(function($data){
                        //collaboratorsJSON.push($data);
                        console.log('Data Success');
                    })
                    .error(function(data){
                        console.log('data error')
                    });
            }






        }
    }]);