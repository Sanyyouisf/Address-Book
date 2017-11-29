app.controller("editAddressCtrl", function($location,$rootScope ,$routeParams ,$scope ,AddressFactory){
	$scope.editedAddress = {};

	AddressFactory.getSingleAddress($routeParams.id)
	.then ((results) => {
		$scope.editedAddress = results.data;
	})
	.catch ((error) => {
		console.log("error in Edit Address",error);
	});


	$scope.editAddressBook = () => {
		$scope.editedAddress.uid = $rootScope.user.uid;
		AddressFactory.editAddress($scope.editedAddress)
		.then((responce)=>{
			$location.url("/addressBooks/list");
			$scope.editedAddress = {};
		})
		.catch((error)=>{
			console.log("error in addNewAddress :",error);
		});
	};


});