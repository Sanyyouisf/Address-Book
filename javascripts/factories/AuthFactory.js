app.factory("AuthFactory",function($q, $http, $rootScope, FIREBASE_CONFIG){

	let currentUser ;
	//Firebase: Determine if user is authenticated.
	let isAuthenticated = () => {
		return firebase.auth().currentUser ? true : false ;
	};


	//Firebase: Return email, UID for user that is currently logged in.
	let getUser = () =>{
		return firebase.auth().currentUser;
	};


	// Kills browser cookie with firebase credentials
	let logout = () => {
		firebase.auth().signout();
	};


	//Firebase: Use input credentials to authenticate user.
	//you pass an object with the credentials
	let authenticate = (credentials) => {
    return $q((resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(credentials.email, credentials.password)
      .then((resultz) => {
        resolve(resultz);
        console.log("resultz in authenticate inside AuthFactory ",resultz);
      }).catch((error) => {
        reject(error);
        console.log("error in authenticate inside AuthFactory", error);
      });
    });
  };


  //Firebase: Register a new user with email and password
  let registerWithEmail = (user) => {
    return $q((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
      .then((resultz) => {
        resolve(resultz);
        console.log("resultz in registerWithEmail inside AuthFactory ",resultz);
      }).catch((error) => {
        reject(error);
        console.log("error in authenticate inside AuthFactory", error);
      });
    });
  };



  return { isAuthenticated:isAuthenticated , getUser:getUser , logout:logout ,authenticate:authenticate,registerWithEmail:registerWithEmail};
});