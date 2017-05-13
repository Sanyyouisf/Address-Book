var app = angular.module("AddressBook",[]);
app.controller("AdressbookCtrl",($scope)=>{
	$scope.showAdressbookList= false;
	$scope.showsearchAB= false;
	$scope.toggleAdressBook=()=>{
		$scope.showAdressbookList= !$scope.showAdressbookList;
	};
	$scope.adressbookItems =
	[
	{
		name:"paddy drew",
		tel:6153545766,
		email:"paddy@gmail.com"
	},
	{
		name:"rayen stewart",
		tel:6153347675,
		email:"rayen@yahoo.com"
	},
	{
		name:"adam chris",
		tel:6152229898,
		email:"adam@hotmail.com"
	},
	{
		name:"jak mena",
		tel:6159890909,
		email:"jak@gmail.com"
	},
	{
		name:"andrew solomon",
		tel:6151215565,
		email:"andrew@yahoo.com"
	},

	];

	$scope.searchAB=()=>{
		$scope.showsearchABList= !$scope.showsearchABList;
	};
});