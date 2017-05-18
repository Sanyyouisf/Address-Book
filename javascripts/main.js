app.run((FIREBASE_CONFIG) => {
    firebase.initializeApp(FIREBASE_CONFIG);
});
app.controller("AdressbookCtrl",($http, $q, $scope, FIREBASE_CONFIG)=>{
	$scope.showAdressbookList= false;
	$scope.showsearchAdressbookList= false;
	$scope.newAdressbookList=false;
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
                // $scope.showAdressbookList = true;
            }).catch((error) => {
                console.log("error in getItems function :", error);
            });
    };

    getItems();

	let postNewAddress = (newAddress) => {
        return new $q((resolve, reject) => {
            $http.post(`${FIREBASE_CONFIG.databaseURL}/addressBooks.json`, JSON.stringify(newAddress))
                .then((resultz) => {
                    resolve(resultz);
                })
                .catch((error) => {
                    reject(error);
                    console.log("error in postNewAddress function",error);
                });
        });
    };

    $scope.addNewAddress = () => {
        // $scope.newTask.isCompleted = false;
        postNewAddress($scope.newAddress)
        .then((response) => {
            $scope.newAddress = {};
        }).catch((error) => {
            console.log("error in addNewAddress", error);
        });

    };

    $scope.toggleAdressBook=()=>{
		$scope.showAdressbookList= !$scope.showAdressbookList;
		$scope.newAdressbookList=false;
	};


    $scope.newItem = () => {
        $scope.showAdressbookList = false;
        $scope.newAdressbookList=!$scope.newAdressbookList;
    };


    $scope.searchAdressbookList=()=>{
		$scope.showsearchAdressbookList= !$scope.showsearchAdressbookList;
		$scope.newAdressbookList=false;
	};


});