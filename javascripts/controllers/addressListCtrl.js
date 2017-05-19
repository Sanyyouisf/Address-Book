app.controller("addressListCtrl", function($scope, AddressFactory){
	console.log("addressListCtrl");
	$scope.addressBooks =[];
	let getAddress = () => {
		AddressFactory.getAddressList()
		.then(()=>{

		})
		.catch((error)=>{
			console.log("error in get ddress",error);
		})
	}

});