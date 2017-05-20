app.controller("addressSearchCtrl", function($location,$routeParams,$scope, AddressFactory){
   console.log("addressSearchCtrl"); 

    $scope.searchedAddress={};
    let searchByName = () => {
        console.log("you clicked on searchByName");
       AddressFactory.searchAddress($routeParams.id)
       .then((resultz) => {
             // $scope.searchedAddress=resultz;
             $scope.searchedAddress=results.data;
             console.log("$scope.searchedAddress");
             $location.url("addressBooks/list{{searchedAddress}}");
        }).catch((error)=>{
            console.log("error",error);
        });
    };
    // searchByName();



    // let getSingleItem = (id) => {
    //     return $q((resolve, reject) => {
    //         $http.get(`${FIREBASE_CONFIG.databaseURL}/items/${id}.json`)
    //             .then((resultz) => {
    //                 resultz.data.id = id;
    //                 console.log("id in getSingleItem",id);
    //                 resolve(resultz);
    //             })
    //             .catch((error) => {
    //                 reject(error);
    //             });
    //     });
    // };
   
});