import React, { useContext } from 'react';
import { Context } from '../../Context';
import {
  AboutWrapper,
  AboutTitle,
  AboutDescription,
  AboutDescriptionWrapper,
  AboutImageWrapper,
  AboutImage,
} from './style';
import { IMG_PATH } from '../../helpers';

const AboutPartners = () => {
  const { isEnglish } = useContext(Context);
  return (
    <AboutWrapper>
      <AboutDescriptionWrapper>
        <AboutTitle>
          {isEnglish ? 'Partners' : 'Aliados Estratégicos'}
        </AboutTitle>
        <AboutDescription>
          {isEnglish
            ? 'Together with our Strategic Allies you will enjoy the best vacations with your bike, you take care of living the adventure, we will take care of the rest...'
            : 'Junto a nuestros Aliados Estratégicos disfrutarás de las mejores vaciones junto a tu bicicleta, tu encárgate de vivir la aventura, nosotros nos encargaremos del resto...'}
        </AboutDescription>
      </AboutDescriptionWrapper>
      <AboutImageWrapper>
        <AboutImage
          src={`${IMG_PATH}aliados-banner.jpg`}
          alt='Acerca de En Bici'
        />
      </AboutImageWrapper>
    </AboutWrapper>
  );
};

export default AboutPartners;
