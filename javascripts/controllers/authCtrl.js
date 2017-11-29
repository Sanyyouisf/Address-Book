app.controller("authCtrl", function($rootScope, $location,$scope, AuthFactory, UserFactory) {
    console.log("inside authCtrl ");
    $scope.alerts=[];
    $scope.auth = {
    	email:"s@s.com",
    	password:"111111"
    };

    $scope.addAlert = function() {
    $scope.alerts.push({msg: 'Another alert!'});
  };

  $scope.closeAlert = function(index) {
    $scope.alerts.splice(index, 1);
  };

    let LogMeIn=()=>{
    	AuthFactory.authenticate($scope.auth)
    	.then((usercreds)=>{
    		return UserFactory.getUser(usercreds.uid);
    	}).then((user)=>{
    		$rootScope.user = user;
    		$location.url('/addressBooks/list');
    	}).catch((error)=>{
    		$scope.alerts.push({msg: error.message});
    	});
    };

    if ($location.path()==='/logout'){
    	AuthFactory.logout();
    	$rootScope.user={};
    	$location.url('/auth');
    }


    $scope.registerUser = () => {    	
    	AuthFactory.registerWithEmail($scope.auth)
    	.then((didRegister)=>{
    		$scope.auth.uid = didRegister.uid;
    		return UserFactory.addUser($scope.auth);
    	}, (error) => {
    		console.log("error in registerWithEmail",error);
    	}).then((registerComplete)=>{
    		LogMeIn();
    	}).catch((error)=>{
    		console.log("error",error);
    	});
    };


    $scope.loginUser = () => {
    	LogMeIn();
    };

    let logout = () => {
        firebase.auth().signOut();
    };

});
