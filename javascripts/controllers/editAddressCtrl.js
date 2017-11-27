app.controller("editAddressCtrl", function($location,$rootScope ,$routeParams ,$scope ,AddressFactory){
	console.log("inside editAddressCtrl Ctrl");
	$scope.editedAddress = {};
	console.log("$routeParams.id :",$routeParams.id);
	console.log("$rootScope.user.uid :",$rootScope.user.uid);


	AddressFactory.getSingleAddress($routeParams.id)
	.then ((results) => {
		console.log("results.data in editAddressCtrl :",results.data);
		$scope.editedAddress = results.data;
	})
	.catch ((error) => {
		console.log("error in Edit Address",error);
	});


	$scope.editAddressBook = () => {
		$scope.editedAddress.uid = $rootScope.user.uid;
		console.log	("$scope.editedAddress :",$scope.editedAddress);
		AddressFactory.editAddress($scope.editedAddress)
		.then((responce)=>{
			console.log("responce in editAddressBook in Ctrl :",responce);
			$location.url("/addressBooks/list");
			$scope.editedAddress = {};
		})
		.catch((error)=>{
			console.log("error in addNewAddress :",error);
		});
	};


});