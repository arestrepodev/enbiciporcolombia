import React from 'react';
import { IMG_PATH } from '../../helpers/index';
import {
  LandingWrapper,
  LandingTitle,
  LandingSubtitle,
  LandingDescription,
  LandingImage
} from './style';

const LandingContact = () => (
  <LandingWrapper>
    <article>
      <LandingTitle>Contáctanos</LandingTitle>
      <LandingSubtitle>
        Econtrarás los mejores planes para que descubras Colombia en Bici,
        capacítate, entrénate y reta tus capacidades.
      </LandingSubtitle>
      <LandingDescription>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora ad
        nihil amet placeat error, suscipit, libero, eligendi aperiam consectetur
        rem laborum dolores quidem unde repudiandae optio? Ab inventore dolores
        temporibus qui, beatae quis necessitatibus maxime, quasi ullam
        perferendis iusto natus!
      </LandingDescription>
    </article>
    <article>
      <LandingImage
        src={`${IMG_PATH}contacto.jpg`}
        alt='Imagen de la sección de Contacto'
      />
    </article>
  </LandingWrapper>
);

export default LandingContact;
