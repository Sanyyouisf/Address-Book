app.controller("AuthCtrl",function($rootScope, $location,$scope, AuthFactory, UserFactory){
	console.log("inside AuthCtrl ");
	$scope.alerts=[];
	$scope.auth = {
    	email:"s@s.com",
    	password:"111111"
    };

	let LogMeIn = () =>{
		AuthFactory.authenticate($scope.auth)
		.then((usercreds)=>{
			//usercreds is the same as results inside AuthFactory
			return UserFactory.getUser(usercreds.uid);
		}).then((user)=>{
			console.log("user",user);
			// console.log("usercreds.uid",usercreds.uid);
			//the user we got here is the uid from the firebase.			
			$rootScope.user = user;
			$location.url ('addressBooks/list');
		}).catch((error) =>{
			$scope.alerts.push({msg: error.message});
			console.log("getUser error inside LogMeIn", error);
		});
	};

	$scope.registerUser = () => {
		//adding new user
		console.log("$scope.auth.username",$scope.auth.username);
		AuthFactory.registerWithEmail($scope.auth)
		.then((didRegister)=>{
			// console.log("you registered ", didRegister);
			//adding uid(coming from fb) to the $scope.auth 
			//as we only enter email and password
			$scope.auth.uid = didRegister.uid;
			$rootScope.username = $scope.auth.Username;
			console.log("$rootScope.username  inside registerUser: ", $rootScope.username);
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

    if ($location.path()==='/logout'){
    	AuthFactory.logout();
    	$rootScope.user={};
    	$location.url('/auth');
    }

    $scope.addAlert = function() {
    $scope.alerts.push({msg: 'Another alert!'});
  	};

  	$scope.closeAlert = function(index) {
    	$scope.alerts.splice(index, 1);
  	};


});