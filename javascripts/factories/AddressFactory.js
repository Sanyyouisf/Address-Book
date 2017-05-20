app.factory("AddressFactory",function($http, $q,FIREBASE_CONFIG){

	let getAddressList = () => {
        let addressBookz = [];
        return  $q ((resolve, reject) => {
            $http.get(`${FIREBASE_CONFIG.databaseURL}/addressBooks.json`)
                .then((fbItems) => {
                    var itemCollection = fbItems.data;
                    Object.keys(itemCollection).forEach((key) => {
                        itemCollection[key].id = key;
                        addressBookz.push(itemCollection[key]);
                    });
                    resolve(addressBookz);
                    console.log("addressBookz in getAddressList",addressBookz);
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
                    console.log("error in postNewAddress function",error);
                });
        });
    };


    // let searchAddress = (addressBookid, name) => {
    // 	console.log("you clicked on searchByName");
    //     return $q((resolve, reject) => {
    //         $http.get(`${FIREBASE_CONFIG.databaseURL}/addressBooks/${addressBookid}.json`)
    //             .then((resultz) => {
    //                 resultz.data.name = name;
    //                 console.log("name in searchAddress",name);
    //                 resolve(resultz);
    //                 console.log("resultz in searchAddress",resultz);
    //             })
    //             .catch((error) => {
    //                 reject(error);
    //                 console.log("error in searchAddress",error);
    //             });
    //     });
    // };


    let searchAddress = (id) => {
    	console.log("you clicked on searchAddress");
        return $q((resolve, reject) => {
            $http.get(`${FIREBASE_CONFIG.databaseURL}/addressBooks/${id}.json`)
                .then((resultz) => {
                    resultz.data.id = id;
                    console.log("id in getSingleItem",id);
                    resolve(resultz);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    };




    return {getAddressList:getAddressList , postNewAddress:postNewAddress ,searchAddress:searchAddress};
});