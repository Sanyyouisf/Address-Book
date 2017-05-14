app.run((FIREBASE_CONFIG) => {
    firebase.initializeApp(FIREBASE_CONFIG);
});
app.controller("AdressbookCtrl",($http, $q, $scope, FIREBASE_CONFIG)=>{
	$scope.showAdressbookList= false;
	$scope.showsearchAB= false;
	$scope.toggleAdressBook=()=>{
		$scope.showAdressbookList= !$scope.showAdressbookList;
	};
	$scope.addressBooks =[];

	let getAddressBook = () => {
        let addressBookz = [];
        return new $q((resolve, reject) => {
            $http.get(`${FIREBASE_CONFIG.databaseURL}/addressBooks.json`)
                .then((fbItems) => {
                    var itemCollection = fbItems.data;
                    Object.keys(itemCollection).forEach((key) => {
                        itemCollection[key].id = key;
                        addressBookz.push(itemCollection[key]);
                    });
                    resolve(addressBookz);
                    console.log("addressBookz in getAddressBook function", addressBookz);
                })
                .catch((error) => {
                    reject(error);
                    console.log("error in getAddressBook function :", error);
                });
        });
    };

    
    let getItems = () => {
        getAddressBook()
            .then((addressBookz) => {
                $scope.addressBooks = addressBookz;
            }).catch((error) => {
                console.log("error in getItems function :", error);
            });
    };

    getItems();

	

	$scope.searchAB=()=>{
		$scope.showsearchABList= !$scope.showsearchABList;
	};
});