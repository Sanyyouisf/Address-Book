app.controller("addressListCtrl", function($scope, AddressFactory){
	console.log("addressListCtrl");
	$scope.addressBooks =[];

	let getAddress = () => {
		AddressFactory.getAddressList()
		.then((addressBooksz)=>{
			console.log("addressBooksz in getAddress",addressBooksz);
			$scope.addressBooks = addressBooksz;
		})
		.catch((error)=>{
			console.log("error in get ddress",error);
		});
	};

	getAddress();

});