var motorcycleRider = {
    name: "Jen",
    age: 105,
    favoriteRoads: [{
            roadName: "Wolfcreek Pass",
            roadNumber: 35,
            state: "UT",
            rating: "3-A"
        },
        {
            roadName: "Journey Through Time Byway",
            roadNumber: 12,
            state: "UT",
            rating: "3-C"
        },
        {
            roadName: "Burr Trail",
            roadNumber: 35,
            state: "UT",
            rating: "4-D"
        },
        {
            roadName: "Beartooth Pass",
            roadNumber: 212,
            state: "MT",
            rating: "5-C"
        },
    ],
    motorcycleFriends: [{
            name: "Kris",
            age: 100,
            favoriteRoads: [{
                    roadName: "Wolfcreek Pass",
                    roadNumber: 35,
                    state: "UT",
                    rating: "3-A"
                },
                {
                    roadName: "Journey Through Time Byway",
                    roadNumber: 12,
                    state: "UT",
                    rating: "3-C"
                },
                {
                    roadName: "Burr Trail",
                    roadNumber: 35,
                    state: "UT",
                    rating: "4-D"
                },
                {
                    roadName: "Beartooth Pass",
                    roadNumber: 212,
                    state: "MT",
                    rating: "5-C"
                },
                {
                    roadName: "East Canyon",
                    roadNumber: 65,
                    state: "UT",
                    rating: "4-B"
                },
            ] // end fave roads for Kris
        }, // end Kris
        {
            name: "Josh",
            age: 27,
            favoriteRoads: ["Road to Grazalema", "Road from Gaeta to the coffee shop", "Silvretta High Alpine Road in Austria"],
        }, // end Josh
    ], // end motorcycle friends
    summary: function () {
        console.log(`I'm a motorcycle rider named ${this.name}. I have ${this.favoriteRoads.length} favorite roads and ${this.motorcycleFriends.length} motorcycle friends.`);
    }
} // end motorcycleRider

console.log(motorcycleRider);

motorcycleRider.motorcycleFriends[1].hometown = "Virginia Beach";
motorcycleRider.motorcycleFriends[1].motorcycleBrand = "BMW";
motorcycleRider.favoriteRoads[3].bestDirection = "South to North";
motorcycleRider.favoriteRoads[3].startCity = "Cooke City, WY";
motorcycleRider.favoriteRoads[3].endCity = "Red Lodge, MT";

motorcycleRider.favoriteRoads.push({
    roadName: "Mink Creek Canyon",
    roadNumber: 36,
    state: "ID",
    rating: "4-B"
});

motorcycleRider.favoriteRoads.push({
    roadName: "Chief Joseph Highway"
});

console.log(motorcycleRider);
motorcycleRider.summary();