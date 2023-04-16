import React from 'react';

import Cards from './Cards/Cards';
import CarData from '../../CarsData';
import useScrollAnimated from '../../useScrollAnimated';
import CardRender from '../../Components/CardRender/CardRender';

export default function Cars() {
  const {animated, scrollHandler} = useScrollAnimated();

  return (
    <CardRender
      animated={animated}
      data={CarData}
      scrollHandler={scrollHandler}
      render={(data, index) => {
        return (
          <Cards key={index} car={data} index={index} animated={animated} />
        );
      }}
    />
  );
}
