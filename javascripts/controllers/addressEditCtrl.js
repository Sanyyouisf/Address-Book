app.controller("addressEditCtrl", function($location ,$routeParams ,$scope ,AddressFactory){
	console.log("inside address Edit Ctrl");
	$scope.newAddress = {};

	AddressFactory.getSingleAddress($routeParams.id)
	.then ((results) => {
		$scope.newAddress = results.data;
	}).catch ((error) => {
		console.log("error in Edit Address",error);
	});


	$scope.addNewAddress = () => {
		AddressFactory.editAdress($scope.newAddress)
		.then(()=>{
			$location.url("/addressBooks/list");
		}).catch((error)=>{
			console.log("error in addNewAddress :",error);
		});
	};


});