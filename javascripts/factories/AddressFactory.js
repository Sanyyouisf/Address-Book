app.factory("AddressFactory",function($http, $q,FIREBASE_CONFIG){


    let getAddressListForUser = (UserId) => {
        userAddressList = [];
        return $q((resolve, reject) => {
            $http.get(`${FIREBASE_CONFIG.databaseURL}/addressBooks.json?orderBy="uid"&equalTo="${UserId}"`)
                .then((fbChildren) => {
                    var AddressListCollection = fbChildren.data;
                    if (AddressListCollection !== null) {
                        Object.keys(AddressListCollection).forEach((key) => {
                            AddressListCollection[key].id = key;
                            userAddressList.push(AddressListCollection[key]);
                        });
                    }
                    resolve(userAddressList);
                })
                .catch((error) => {
                    reject(error);
                    console.log("error in getAddressListForUser :", error);
                });
        });
    };


    let getSingleAddress= (id)=>{
        return $q((resolve,reject) =>{
            $http.get(`${FIREBASE_CONFIG.databaseURL}/addressBooks/${id}.json`)
            .then((resultz)=>{
                resultz.data.id = id;
                resolve(resultz);
            })
            .catch((error) => {
                reject(error);
                console.log("error in get Single Address in factory is :",error);
            });
        });
    };


    let editAddress = (address) => {
        return $q ((resolve,reject)=>{
            $http.put(`${FIREBASE_CONFIG.databaseURL}/addressBooks/${address.id}.json`,JSON.stringify({
                uid:address.uid,
                firstName:address.firstName,
                lastName:address.lastName,
                tel :address.tel,
                email:address.email,
                address:address.address,
                zipcode:address.zipcode,
                state:address.state
            }))
            .then((resultz)=>{
                resolve(resultz);
            })
            .catch((error)=>{
                reject(error);
                console.log("error in editAdress in factory is : ",error);
            });
        });
    };


    let postNewAddress = (newAddress) => {
        return $q((resolve, reject) => {
            $http.post(`${FIREBASE_CONFIG.databaseURL}/addressBooks.json`,
                    JSON.stringify(newAddress))
                .then((storeAddressSuccess) => {
                    resolve(storeAddressSuccess);
                })
                .catch((error) => {
                    reject(error);
                    console.log("error in addChild :", error);
                });
        });
    };


    let deletez = (addressBookId) => {
        return $q ((resolve,reject) => {
            $http.delete(`${FIREBASE_CONFIG.databaseURL}/addressBooks/${addressBookId}.json`)
            .then((resultz) => {
                resolve(resultz);
                console.log ("resultz in deletez factory :", resultz);
            })
            .catch((error) => {
                reject(error);
                console.log("error in deleteAdress in factory is : ",error);

            });
        });

    };


    return {getAddressListForUser:getAddressListForUser, postNewAddress:postNewAddress , getSingleAddress:getSingleAddress , editAddress: editAddress ,deletez:deletez};
});