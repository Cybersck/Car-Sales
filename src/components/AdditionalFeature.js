import React from 'react';

const AdditionalFeature = props => {
  
let checkFeatures = false;

    props.car.features.forEach(i => {
      if (i.id === props.feature.id) {
        checkFeatures = true;
      }
    }) 

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */ }
      <button className="button" disabled={checkFeatures} onClick={() => props.buyItem(props.feature)}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AdditionalFeature;
