angular.module('starter.collaborators.details', [])

    .config(function ($stateProvider) {
        $stateProvider
            .state('app.collaborator-detail', {
                url: '/collaborators/:collaboratorId',

                templateUrl: 'app/collaborators/details/details.html',
                controller: 'collaboratorsDetailCtrl'

            });
    })

    .controller('collaboratorsDetailCtrl', function ($scope, collaboratorsService, $stateParams) {

        collaboratorsService.getAll().then(function ($dataObject) {
            var i=0;

            $scope.colalboratorID =$stateParams.collaboratorId;
            $scope.collaborators = $dataObject.data;


            while ($scope.collaborators[i].id != $scope.colalboratorID)
            {
                i++;
            }

            $scope.collaborator = $scope.collaborators[i];



        });
    });