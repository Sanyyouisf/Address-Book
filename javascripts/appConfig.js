let isAuth = (AuthFactory) => new Promise ((resolve, reject) => {
  if(AuthFactory.isAuthenticated()){
    resolve();
  } else {
    reject();
  }
});

app.run(function($location, $rootScope, FIREBASE_CONFIG, AuthFactory) {
  firebase.initializeApp(FIREBASE_CONFIG);

  $rootScope.$on('$routeChangeStart', function(event, currRoute, prevRoute) {
    var logged = AuthFactory.isAuthenticated();
    var appTo;

    if (currRoute.originalPath) {
      appTo = currRoute.originalPath.indexOf('/auth') !== -1;
    }

    if (!appTo && !logged) {
      event.preventDefault();
      $location.path('/auth');
    }
  });
});


app.config(function($routeProvider){
	$routeProvider 
	.when('/auth',{
        templateUrl:'partials/auth.html',
        controller:'authCtrl'
    })
	.when ("/addressBooks/list",{
		templateUrl:'partials/listAddress.html',
		controller:'listAddressCtrl'
	})
	.when("/addressBooks/new",{
		templateUrl:'partials/newAddress.html',
		controller:'newAddressCtrl'
	})
	.when("/addressBooks/edit/:id", {
      	templateUrl:'partials/editAddress.html',
      	controller:'editAddressCtrl'
    })
	.when('/logout',{
        templateUrl:'partials/auth.html',
        controller:'authCtrl',
        resolve:{isAuth}
    })
	.otherwise('/auth');
});