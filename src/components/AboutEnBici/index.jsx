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

const AboutEnBici = () => {
  const { isEnglish } = useContext(Context);
  return (
    <AboutWrapper>
      <AboutDescriptionWrapper>
        <AboutTitle>{isEnglish ? 'About Us:' : '¿Por qué En Bici?'}</AboutTitle>
        <AboutDescription>
          {isEnglish
            ? 'You will enjoy your vacation, you can reach places you will never imagined, your will love the landscapes, your body will be happy with what your mind will achieve. You will meet new cultures, flavors, landscapes and feelings. The most important thing is that you want to return to Colombia a country that embraces you and welcomes you with good bike routes ...'
            : 'Disfrutaras tus vacaciones, llegarás a sitios que nunca imaginaste, a tus ojos les encantarán los paisajes, tu cuerpo será feliz de lo tu mente logrará. Conocerás nuevas culturas, sabores, paisajes y sentimientos. Lo más importante es que querras volver a Colombia un pais que te abraza y te recibe con buenas rutas en bicicleta...'}
        </AboutDescription>
      </AboutDescriptionWrapper>
      <AboutImageWrapper>
        <AboutImage
          src={`${IMG_PATH}enbici-descansando.jpg`}
          alt='Acerca de En Bici'
        />
      </AboutImageWrapper>
    </AboutWrapper>
  );
};

export default AboutEnBici;
