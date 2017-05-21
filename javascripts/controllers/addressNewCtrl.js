app.controller("addressNewCtrl", function($http, $q, $scope, $location, FIREBASE_CONFIG, AddressFactory) {

    $scope.addNewAddress = () => {
        AddressFactory.postNewAddress($scope.newAddress)
            .then((response) => {
                $scope.newAddress = {};
                $location.url("addressBooks/list"); //switch views
            }).catch((error) => {
                console.log("error in addNewAddress", error);
            });
    };



    

});
