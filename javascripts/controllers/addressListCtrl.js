app.controller("addressListCtrl", function($scope, AddressFactory,$rootScope) {
    $scope.selectedList = [];

    let displayUserList = () => {
        AddressFactory.getAddressListForUser($rootScope.user.uid)
        .then((result) => {
            console.log("result in list ctrl :",result);
            $scope.selectedList = result;
            })
        .catch((error) => {
            console.log("error in displayUserList: ", error);
        });
    };

    displayUserList();


    $scope.deleteAddress = (id) => {
        AddressFactory.deletez(id)
            .then(() => {
                getAddress();
            }).catch((error) => {
                console.log("deleteAddress error", error);
            });
    };


});
