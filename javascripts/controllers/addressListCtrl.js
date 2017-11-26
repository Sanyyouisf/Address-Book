app.controller("addressListCtrl", function($scope, AddressFactory,$rootScope) {
    console.log("addressListCtrl");
    $scope.selectedList = [];
    // $scope.addressBooks = [];

    // let getAddress = () => {
    //     AddressFactory.getAddressList()
    //         .then((addressBooksz) => {
    //             $scope.addressBooks = addressBooksz;
    //         })
    //         .catch((error) => {
    //             console.log("error in get ddress", error);
    //         });
    // };

    // getAddress();

    $scope.deleteAddress = (id) => {
        AddressFactory.deletez(id)
            .then(() => {
                getAddress();
            }).catch((error) => {
                console.log("deleteAddress error", error);
            });
    };

    let displayUserList = () => {
        AddressFactory.getAddressListForUser($rootScope.user.uid)
        .then((result) => {
            console.log("result in list ctrl :",result);
            $scope.selectedList = result;
                //loop through the selectedList to get image url 
                // $scope.selectedchildren.forEach((kid) => {
                //     $scope.childId = kid.id;
                //     AvatarFactory.getSinglePicture(kid.pic)
                //         .then((image) => {
                //             kid.url = image.path;
                //         })
                //         .catch((error) => {
                //             console.log("error in getSinglePicture :", error);
                //         });

                    // ChildActivityFactory.getChildActivitiesForChild(kid.id)
                    //     .then((childActivities) => {
                    //         kid.activities = [];
                    //         childActivities.forEach((x) => {
                    //             ActivityFactory.getSingleActivity(x.activityId)
                    //                 .then((result) => {
                    //                     kid.activities.push(result);
                    //                 });
                    //         });
                    //     });
            })
        .catch((error) => {
            console.log("error in displayUserList: ", error);
        });
    };

    displayUserList();

    $scope.deleteAddress = (id) => {
        AddressFactory.deletez(id)
            .then(() => {
                getAddress();
            }).catch((error) => {
                console.log("deleteAddress error", error);
            });
    };


    // var students =[
    //                 {
    //                     Id:"1",
    //                     FirstName: "Beginner guy FirstName",
    //                     LastName:"Beginner guy LastName",
    //                     GPA:3,
    //                     StudentRank:"Beginner"
    //                 },
    //                 {
    //                     Id:"2",
    //                     FirstName: "Advanced guy FirstName",
    //                     LastName:"Advanced guy LastName",
    //                     GPA:3.7,
    //                     StudentRank:"Advanced"
    //                 },
    //                 {
    //                     Id:"3",
    //                     FirstName: "Advanced guy FirstName",
    //                     LastName:"Advanced guy LastName",
    //                     GPA:3.5,
    //                     StudentRank:"Advanced"
    //                 }
    //             ]


// function AvgGPA (students) {
//     var sum = 0 ;
//     var counter =0; 
//     for (var i=0 ; i<students.length ;++i){
//         if (students[i].StudentRank === "Advanced" ){
//             sum += students[i].GPA ;
//             counter += 1 ;
//         }
//     }

//     console.log("sum/counter before:",sum/counter);
    
//      var AvgGPA = sum/counter;
//     console.log("AvgGPA before:",AvgGPA);

//     // return AvgGPA;
//     return AvgGPA;
//     console.log("AvgGPA after:",{AvgGPA});
// }

// AvgGPA (students);

});
