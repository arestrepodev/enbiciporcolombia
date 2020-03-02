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
          Disfrutaras tus vacaciones, llegarás a sitios que nunca imaginaste, a
          tus ojos les encantarán los paisajes, tu cuerpo será feliz de lo tu
          mente logrará. Conocerás nuevas culturas, sabores, paisajes y
          sentimientos. Lo más importante es que querras volver a Colombia un
          pais que te abraza y te recibe con buenas rutas en bicicleta...
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
