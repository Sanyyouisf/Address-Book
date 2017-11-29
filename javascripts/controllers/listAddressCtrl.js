app.controller("listAddressCtrl", function($scope, AddressFactory,$rootScope) {
    $scope.selectedList = [];

    let displayUserList = () => {
        AddressFactory.getAddressListForUser($rootScope.user.uid)
        .then((result) => {
            $scope.selectedList = result;
        })
        .catch((error) => {
            console.log("error in displayUserList: ", error);
        });
    };

    displayUserList();


    $scope.deleteAddress = (id) => {
        AddressFactory.deletez(id)
            .then((responce) => {
                displayUserList();
            })
            .catch((error) => {
                console.log("deleteAddress error", error);
            });
    };


});
