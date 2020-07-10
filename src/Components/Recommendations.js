import React from "react";
import cities from "../cities";

const Recommendations = ({ city }) => {
  let recommendedA, recommendedB, recommendedC;

  for (let i = 0; i < cities.length; i++) {
    if (cities[i].id === city.recommendedCities[0]) {
      recommendedA = cities[i];
    }
    if (cities[i].id === city.recommendedCities[1]) {
      recommendedB = cities[i];
    }
    if (cities[i].id === city.recommendedCities[2]) {
      recommendedC = cities[i];
    }
  }

//   const recommended = (_city) => {

//     cities.find(() => {
      
//         return _city.id === city.recommendedCities
//     })

// }
// let recommendations = recommended(cities)
// console.log(recommendations)
  return (
    <div>
      <div>
        <h1>{city.recommendedSentence}</h1>
        <h1>{recommendedA.name}</h1>
        <img src={recommendedA.image} alt={city.name}/>
      </div>
      <div>
        <h1>{recommendedB.name}</h1>
        <img src={recommendedB.image} alt={city.name}/>
      </div>
      <div>
        <h1>{recommendedC.name}</h1>
        <img src={recommendedC.image} alt={city.name}/>
      </div>
    </div>
  );
};
export default Recommendations;
