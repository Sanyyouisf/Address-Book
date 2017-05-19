app.run(function(FIREBASE_CONFIG) {
    firebase.initializeApp(FIREBASE_CONFIG);
});

app.config(function($routeProvider){
	$routeProvider 
	.when ("/addressBooks/list",{
		templateUrl:'partials/address-list.html',
		controller:'addressListCtrl'
	})
	.when("/addressBooks/new",{
		templateUrl:'partials/address-new.html',
		controller:'addressNewCtrl'
	})
	.when("/addressBooks/view",{
		templateUrl:'partials/address-view.html',
		controller:'addressViewCtrl'
	})
	.otherwise("/addressBooks/view");
});