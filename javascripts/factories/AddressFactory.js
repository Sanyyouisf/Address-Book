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
                        console.log("addressBookz in getAddressList",addressBookz);
                    });
                    resolve(addressBookz);
                })
                .catch((error) => {
                    reject(error);
                    console.log("error in getAddressBook function :", error);
                });
        });
    };



    return {getAddressList:getAddressList , };
});