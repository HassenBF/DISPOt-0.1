/**
 * Created by hbenfred on 07/03/2015.
 */

angular.module('starter.collaborators', [])

    .config(function ($stateProvider) {

        $stateProvider

            .state('app.collaborators', {
                url: "/collaborators",
                templateUrl: "app/collaborators/collaborators.html",
                controller: 'collaboratorsCtrl'

            });

    })


    .controller('collaboratorsCtrl', ['$scope', 'collaboratorsService', function ($scope, collaboratorsService) {
        /*$scope.collaborators = collaboratorsService.all();
         console.log("single object",$scope.collaborators);*/

        var filterValue;
        $scope.orderProp = 'firstName';
        $scope.sortDirection = false;


        $scope.sort = function(column) {
            if ($scope.orderProp === column) {
                $scope.sortDirection = !$scope.sortDirection;
            } else {
                $scope.orderProp = column;
                $scope.sortDirection = false;
            }
        };

        collaboratorsService.getAll().then(function ($dataObject) {
            //console.log("Data in controller :", $dataObject.data);
            $scope.collaborators = $dataObject.data;


        });

       /* $scope.AvailableIn = function($elementDate)
        {
            var one_day=1000*60*60*24;
            var today_ms;
            var today = new Date();
            var dd = today.getDate();
            var mm = today.getMonth()+1; //January is 0!
            var yyyy = today.getFullYear();
            var elementDate_ms =elementDate.getTime();

            console.log("date en parametre : ",elementDate_ms);

            var date_difference;
            if(dd<10){
                dd='0'+dd
            }
            if(mm<10){
                mm='0'+mm
            }

                today=dd + '/' + mm + '/' + yyyy;
                today_ms=today;
                date_difference = today_ms - elementDate_ms;
            return Math.round(date_difference/one_day);


        };*/

        $scope.AvailableIn = function($elementDate)
        {

            var elementDate_ms =$elementDate;
            var currentdate = moment(moment()).format('DD/MM/YYYY');
            currentdate = moment(currentdate,"DD-MM-YYYY");
            var difference =( moment(currentdate).diff(moment(elementDate_ms), 'days', true));


           //console.log("current date",currentdate);
           // console.log("passed object",elementDate_ms);
            //console.log("date diff",difference);

            return difference;






        };

        $scope.setFilter=function (fValue) {
            filterValue = fValue;
        };

        $scope.filterDates = function ($unfilterdCollaborator) {

            var ASAPRegx = new RegExp (/ASAP/);
            var dateRegex = new RegExp("^(0?[1-9]|[12][0-9]|3[01])[\\/\\-](0?[1-9]|1[012])[\\/\\-]\\d{4}", "g");
            var daysToAvailable;



            switch (filterValue) {
                case 'ASAP':
                    if ($unfilterdCollaborator.availableDate.match(ASAPRegx))

                        return true;
                    break;
                case '1' :
                    if ($unfilterdCollaborator.availableDate.match(dateRegex)) {

                        daysToAvailable=$scope.AvailableIn(moment($unfilterdCollaborator.availableDate.match(dateRegex).toString(),"DD-MM-YYYY"));
                        console.log(daysToAvailable);

                       return daysToAvailable > -30  ;


                    }


                    break;

                case '3' :
                    if ($unfilterdCollaborator.availableDate.match(dateRegex)) {
                        daysToAvailable = $scope.AvailableIn(moment($unfilterdCollaborator.availableDate.match(dateRegex).toString(), "DD-MM-YYYY"));
                        console.log(daysToAvailable);
                        return daysToAvailable < -30;
                    }
                    break;

                default :
                    return true;
            }








            };



}])
;
