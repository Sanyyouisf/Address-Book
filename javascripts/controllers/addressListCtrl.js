app.controller("addressListCtrl", function($scope, AddressFactory) {
    console.log("addressListCtrl");
    $scope.addressBooks = [];

    let getAddress = () => {
        AddressFactory.getAddressList()
            .then((addressBooksz) => {
                $scope.addressBooks = addressBooksz;
            })
            .catch((error) => {
                console.log("error in get ddress", error);
            });
    };

    getAddress();

    $scope.deleteAddress = (id) => {
        AddressFactory.deletez(id)
            .then(() => {
                getAddress();
            }).catch((error) => {
                console.log("deleteAddress error", error);
            });
    };

});
