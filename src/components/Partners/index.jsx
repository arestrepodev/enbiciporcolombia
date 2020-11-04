import React from 'react';
import {
  PartnerLogo,
  PartnersSection,
  PartnersWrapper,
  PartnersGrid,
} from './style';
import { IMG_PATH } from '../../helpers';

const Partners = ({ logo, description, name, images }) => {
  return (
    <PartnersWrapper>
      <PartnersSection>
        <PartnerLogo src={`${IMG_PATH}${logo}`} alt={`${name}`} />
        <h2>{name}</h2>
        <p>{description}</p>
      </PartnersSection>
      <PartnersGrid>
        {images.map((image) => {
          return (
            <img
              key={image.key}
              src={`${IMG_PATH}${image.img}`}
              alt={`${name} ${image.key}`}
            />
          );
        })}
      </PartnersGrid>
    </PartnersWrapper>
  );
};

export default Partners;
