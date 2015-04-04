/**
 * Created by Hassen on 14/03/2015.
 **/

angular.module('starter.filters', [])

    .filter('availabilityFilter', function ($selectedPeriod, $unfilterdCollaborators) {
    var $filterdCollaborators = [];
    var ASAPRegx = new RegExp (/ASAP/);
    var dateRegex = new RegExp("^(0?[1-9]|[12][0-9]|3[01])[\\/\\-](0?[1-9]|1[012])[\\/\\-]\\d{4}", "g");
    var i;


    if ($selectedPeriod == "ASAP") {

        //console.log("Length of Parameter in controller :",$unfilterdCollaborators.length);
        console.log("collaborators passed parameter :", $unfilterdCollaborators);
        for (i = 0; i < $unfilterdCollaborators.length; i++) {

            console.log($unfilterdCollaborators[i].Available_Date);

            if ($unfilterdCollaborators[i].Available_Date.match(ASAPRegx))
                $filterdCollaborators.push($unfilterdCollaborators[i].Available_Date);
        }
    }
    else {
        for (i = 0; i < $unfilterdCollaborators.length; i++) {
            if ($unfilterdCollaborators[i].Available_Date.match(dateRegex))
                $filterdCollaborators.push($unfilterdCollaborators[i]);


        }
    }
        return $filterdCollaborators;
    //console.log("result : ", $filterdCollaborators);


});
