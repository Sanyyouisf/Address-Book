app.controller("addressEditCtrl", function($location ,$routeParams ,$scope ,AddressFactory){
	console.log("inside address Edit Ctrl");
	$scope.newAddress = {};

	AddressFactory.getSingleAddress($routeParams.id)
	.then ((results) => {
		// console.log("results in addressEditCtrl is :",results);
		$scope.newAddress = results.data;
	}).catch ((error) => {
		// console.log("error in Edit Address",error);
	});


	$scope.addNewAddress = () => {
		AddressFactory.editAdress($scope.newAddress)
		.then(()=>{
			// console.log("results in addNewAddress inside  addressEditCtrl is ", results);
			$location.url("/addressBooks/list");
		}).catch((error)=>{
			console.log("error in addNewAddress inside  addressEditCtrl is :",error);
		});
	};


});