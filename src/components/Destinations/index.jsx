import React, { useContext } from 'react';
import StyledTitle from '../StyledTitle';
import { Context } from '../../Context';

const Destinations = () => {
  const { isEnglish } = useContext(Context);
  return (
    <section>
      <StyledTitle
        subtitle={isEnglish ? 'The Best' : 'Tenemos los Mejores'}
        title={isEnglish ? 'Destinations' : 'Destinos'}
      />
    </section>
  );
};

export default Destinations;
