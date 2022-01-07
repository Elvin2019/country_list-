import React from 'react';
import Card from './Card';

const CardList = ({ countries, imageSize }) => {
  return (
    <div>
      {
        countries.map((user, i) => {
          return (
            <Card
              key={i}
              imageSize = {imageSize}
              name={countries[i].country_name}
              shortName={countries[i].country_short_name}

              />
          );
        })
      }
    </div>
  );
}

export default CardList;