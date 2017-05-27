app.controller("AuthCtrl",function($rootScope, $location,$scope, AuthFactory, UserFactory){
	console.log("inside AuthCtrl ");
	$scope.auth = {};

	let LogMeIn = () =>{
		AuthFactory.authenticate($scope.auth)
		.then((usercreds)=>{
			//usercreds is the same as results inside AuthFactory
			console.log("usercred inside LogMeIn",usercreds);
			return UserFactory.getUser(usercreds.uid);
		}).then((user)=>{
			console.log("user",user);
			//the user we got here is the uid from the firebase.			
			$rootScope.user = user;
			console.log("$rootScope.user inside LogMeIn",$rootScope.user);
			$location.url ('addressBooks/list');
		}).catch((error) =>{
			console.log("getUser error inside LogMeIn", error);
		});
	};

	$scope.registerUser = () => {
		//adding new user
		AuthFactory.registerWithEmail($scope.auth)
		.then((didRegister)=>{
			console.log("you registered ", didRegister);
			//adding uid(coming from fb) to the $scope.auth 
			//as we only enter email and password
			$scope.auth.uid = didRegister.uid;
			console.log("$scope.auth.uid  inside registerUser: ", $scope.auth.uid);
    		return UserFactory.addUser($scope.auth);
    		//adding $scope.auth as a user -after adding the uid- to the fb.
    	},(error) => {
    		console.log("error in registerWithEmail in registerUser",error);
		}).then((registerComplete)=>{
    		// console.log("registerComplete",registerComplete);
    		LogMeIn();
    	}).catch((error)=>{
    		console.log("error in registerUser",error);
    	});
	};

	$scope.loginUser = () => {
    	LogMeIn();
    };

    if ( $location.path() === 'logout'){
    	AuthFactory.logout();
    	$rootScope.user={};
    }





});