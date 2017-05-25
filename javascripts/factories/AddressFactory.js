app.factory("AddressFactory",function($http, $q,FIREBASE_CONFIG){

	let getAddressList = () => {
        let addressBookz = [];
        return  $q ((resolve, reject) => {
            $http.get(`${FIREBASE_CONFIG.databaseURL}/addressBooks.json`)
                .then((fbItems) => {
                    console.log("fbItems in getAddressList",fbItems);
                    var itemCollection = fbItems.data;
                    // console.log("itemCollection in getAddressList",itemCollection);
                    Object.keys(itemCollection).forEach((key) => {
                        // console.log("key getAddressList before",key);
                        itemCollection[key].id = key;
                        addressBookz.push(itemCollection[key]);//the result addressBookz is array of objects.of the address books.
                        // console.log("addressBookz in loop getAddressList is:",addressBookz);
                    });
                    resolve(addressBookz);
                    console.log("addressBookz in after getAddressList is :",addressBookz);
                })
                .catch((error) => {
                    reject(error);
                    console.log("error in getAddressBook function :", error);
                });
        });
    };


    let postNewAddress = (newAddress) => {
        return $q((resolve, reject) => {
            $http.post(`${FIREBASE_CONFIG.databaseURL}/addressBooks.json`, JSON.stringify(newAddress))
                .then((resultz) => {
                    resolve(resultz);
                })
                .catch((error) => {
                    reject(error);
                    console.log("error in postNewAddress in factory is :",error);
                });
        });
    };


    // let searchAddress = (address) => {
    //     console.log("you clicked on searchAddress");
    //     return $q((resolve, reject) => {
    //         $http.get(`${FIREBASE_CONFIG.databaseURL}/addressBooks/${id}.json`,JSON.stringify({
    //             name:address.name,
    //             tel :address.tel,
    //             email:address.email,
    //             address:address.address,
    //             zipcode:address.zipcode,
    //             state:address.state
    //         }))
    //             .then((resultz) => {
    //                 resultz.data.id = id;
    //                 console.log("id in getSingleItem in factory is :",id);
    //                 resolve(resultz);
    //             })
    //             .catch((error) => {
    //                 reject(error);
    //             });
    //     });
    // };


    let searchAddress = (address) => {
        console.log("you clicked on searchAddress");
        return $q((resolve, reject) => {
            $http.get(`${FIREBASE_CONFIG.databaseURL}/addressBooks/${id}.json`)
                .then((resultz) => {
                    resultz.data.id = id;
                    console.log("id in getSingleItem in factory is :",id);
                    resolve(resultz);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    };


    let getSingleAddress= (id)=>{
        return $q((resolve,reject) =>{
            $http.get(`${FIREBASE_CONFIG.databaseURL}/addressBooks/${id}.json`)
            .then((resultz)=>{
                 resultz.data.id = id;
                resolve(resultz);
                console.log("resultz in getSingleAddress in factory is :",resultz);
            })
            .catch((error) => {
                reject(error);
                console.log("error in get Single Address in factory is :",error);
            });
        });
    };


    let editAdress = (address) => {
        return $q ((resolve,reject)=>{
            $http.put(`${FIREBASE_CONFIG.databaseURL}/addressBooks/${address.id}.json`,JSON.stringify({
                name:address.name,
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


    let deletez = (addressId) => {
        return $q ((resolve,reject) => {
            $http.delete(`${FIREBASE_CONFIG.databaseURL}/addressBooks/${addressId}.json`)
            .then((resultz) => {
                resolve(resultz);
            })
            .catch((error) => {
                reject(error);
                console.log("error in deleteAdress in factory is : ",error);

            });
        });

    };




    return {getAddressList:getAddressList , postNewAddress:postNewAddress ,searchAddress:searchAddress, getSingleAddress:getSingleAddress ,editAdress:editAdress ,deletez:deletez};
});