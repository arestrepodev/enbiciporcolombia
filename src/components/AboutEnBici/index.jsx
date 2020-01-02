import React from 'react';
import {
  AboutWrapper,
  AboutTitle,
  AboutDescription,
  AboutDescriptionWrapper,
  AboutImageWrapper,
  AboutImage
} from './style';
import { IMG_PATH } from '../../helpers';

const AboutEnBici = () => {
  return (
    <AboutWrapper>
      <AboutDescriptionWrapper>
        <AboutTitle>¿Por qué En Bici?</AboutTitle>
        <AboutDescription>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          minima consectetur delectus dolor repellat optio inventore aut ut!
          Dolorum et perspiciatis reprehenderit amet odio. Laudantium mollitia,
          repellat quisquam amet ex quam, quasi doloribus a sint provident
          molestiae ea ratione suscipit.
        </AboutDescription>
        <AboutDescription>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          minima consectetur delectus dolor repellat optio inventore aut ut!
          Dolorum et perspiciatis reprehenderit amet odio. Laudantium mollitia,
          repellat quisquam amet ex quam, quasi doloribus a sint provident
          molestiae ea ratione suscipit.
        </AboutDescription>
      </AboutDescriptionWrapper>
      <AboutImageWrapper>
        <AboutImage src={`${IMG_PATH}plans-background.jpg`} alt='' />
      </AboutImageWrapper>
    </AboutWrapper>
  );
};

export default AboutEnBici;
