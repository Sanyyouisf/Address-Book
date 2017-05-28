app.factory("UserFactory", function($q, $http, FIREBASE_CONFIG) {

    let addUser = (authData) => {
        console.log("authData inside addUser in factory ",authData);
        return $q((resolve, reject) => {
            $http.post(`${FIREBASE_CONFIG.databaseURL}/users.json`,JSON.stringify({
                uid: authData.uid,
                username: authData.username
                }))
            .then((storeUserSuccess) => {
                resolve(storeUserSuccess);
                console.log("storeUserSuccess in addUser inside UserFactory",storeUserSuccess);
            })
            .catch((error) => {
                reject(error);
                console.log("error in addUser inside UserFactory", error);
            });
        });
    };


    let getUser =(userId)=>{
    	return $q ((resolve,resject)=>{
    		$http.get(`${FIREBASE_CONFIG.databaseURL}/users.json?orderBy="uid"&equalTo="${userId}"`)
    		.then((userObject)=>{
    			// console.log("userObject in getUser inside UserFactory ",userObject);
    			//loop through userObject.data
    			let users = [];
    			Object.keys(userObject.data).forEach((key) => {
            		users.push(userObject.data[key]);
            		// console.log("users in getUser inside UserFactory",users);
            		// console.log("userObject.data in getUser inside UserFactory",userObject.data[key]);
          		});
    			resolve(users[0]);
    			// console.log("users[0] in getUser inside UserFactory after resolve ",users[0]);
    		})
    		.catch((error)=>{
    			reject(error);
    			console("error in getUser in UserFactory",error);
    		});
    	});
    };


return { addUser:addUser , getUser:getUser};

});


