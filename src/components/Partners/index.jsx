import React from 'react';
import {
  PartnerLogo,
  PartnersSection,
  PartnersWrapper,
  PartnersGrid,
} from './style';
import { IMG_PATH } from '../../helpers';

const Partners = () => {
  return (
    <PartnersWrapper>
      <PartnersSection>
        <PartnerLogo
          src={`${IMG_PATH}logo-clarion-hotel.jpg`}
          alt='Logo Hotel Clarion'
        />
        <h2>Clarion Hotel</h2>
        <p>
          Habitaciones con una excelente ubicación. Ideal para negocios o
          descanso. Amplios salones para eventos sociales y empresariales.
          Planes románticos.
        </p>
      </PartnersSection>
      <PartnersGrid>
        <img src={`${IMG_PATH}clarion-hotel-01.jpg`} alt='Hotel Clarion' />
        <img src={`${IMG_PATH}clarion-hotel-02.jpg`} alt='Hotel Clarion' />
        <img src={`${IMG_PATH}clarion-hotel-03.jpg`} alt='Hotel Clarion' />
        <img src={`${IMG_PATH}clarion-hotel-04.jpg`} alt='Hotel Clarion' />
        <img src={`${IMG_PATH}clarion-hotel-05.jpg`} alt='Hotel Clarion' />
        <img src={`${IMG_PATH}clarion-hotel-06.jpg`} alt='Hotel Clarion' />
      </PartnersGrid>
    </PartnersWrapper>
  );
};

export default Partners;
