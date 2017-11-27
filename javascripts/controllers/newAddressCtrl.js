app.controller("newAddressCtrl", function($http, $q,$rootScope, $scope, $location, FIREBASE_CONFIG, AddressFactory) {

    $scope.addNewAddress = ()=>{
		$scope.newAddress.uid = $rootScope.user.uid;
		AddressFactory.postNewAddress($scope.newAddress)
		.then((reponse)=>{
			console.log("reponse in Ctrl :",reponse);
			$scope.newChild= {};
			$location.url('/addressBooks/list');
		})
		.catch((error)=>{
			console.log("error in addNewAddress :",error);
		});
	};

});
