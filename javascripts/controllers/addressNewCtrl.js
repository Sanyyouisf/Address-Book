app.controller("addressNewCtrl", function($rootScope, $http, $q, $scope, $location, FIREBASE_CONFIG, AddressFactory) {
     // $scope.newAddress = {};

    $scope.addNewAddress = () => {
    	$scope.newAddress.uid = $rootScope.user.uid;
    	console.log("$scope.newAddress.uid in addNewAddress ins Ctrl :",$scope.newAddress.uid);
        AddressFactory.postNewAddress($scope.newAddress)
            .then((response) => {
                console.log("response in addNewAddress in Ctrl :",response);
                $scope.newAddress = {};
                $location.url("addressBooks/list"); //switch views
                console.log("$scope.newAddress in addNewAddress Ctrl :",$scope.newAddress);
            }).catch((error) => {
                console.log("error in addNewAddress :", error);
            });
    };

    

});
