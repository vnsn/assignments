import React from "react";
import Location from "./Location";

let vacationSpots = [  
    {
      place: "Meridian, Idaho",
      price: 40,
      timeToGo: "Spring",
      imgURL: "http://meridiancity.org/img/cityhall.jpg"
    },{
      place: "Cancun",
      price: 900,
      timeToGo: "Winter",
      imgURL: "https://www.visitmexico.com/sites/default/files/styles/extralarge/public/field/image/2017/02/quintana-roo_destinos-principales_cancun_01.jpg"
    },{
      place: "China",
      price: 1200,
      timeToGo: "Fall",
      imgURL: "http://www.cnto.org/wp-content/uploads/2014/04/Beijing-Great-Wall-4.jpg"
    },{
      place: "Norway",
      price: 1100,
      timeToGo: "Summer",
      imgURL: "https://res.cloudinary.com/simpleview/image/upload/c_fill,f_auto,h_1000,q_65,w_1600/v1/clients/norway/553953f1_6f83_480b_93c1_f2d3d5c6f532_a41b5e5e-9445-4b54-b5e5-d2a6b01ca1f0.jpg"
    },{
      place: "Spain",
      price: 400,
      timeToGo: "Spring",
      imgURL: "http://c8.alamy.com/comp/J24053/rota-spain-september-09-2016-rota-beach-promenade-at-night-rota-cadiz-J24053.jpg"
    }
  ]
  

function Cards() {

  const spotList = vacationSpots.map((spot, i) => <Location key={spot.place + i} spot={spot}></Location>);

  return (
    <div>
        {spotList}
    </div>
);
} 

export default Cards;
