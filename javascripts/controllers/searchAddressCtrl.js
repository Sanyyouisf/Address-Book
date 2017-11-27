app.controller("searchAddressCtrl", function($location,$routeParams,$scope, AddressFactory){
   console.log("searchAddressCtrl"); 
    $scope.searchedAddress={};

    AddressFactory.getSingleAddress($routeParams.id)
    .then ((results) => {
        $scope.searchedAddress = results.data;
        console.log("$scope.searchedAddress",$scope.searchedAddress);
    }).catch ((error) => {
        console.log("error in Edit Address",error);
    });


    $scope.searchByName = () => {
        console.log("you clicked on searchByName");
       AddressFactory.searchAddress($scope.searchedAddress)
       .then(() => {
            $scope.searchedAddress=results.data.name;
            console.log("$scope.searchedAddress",$scope.searchedAddress);
             $location.url("addressBooks/list/{{searchedAddress}}");
        }).catch((error)=>{
            console.log("error",error);
        });
    };


});