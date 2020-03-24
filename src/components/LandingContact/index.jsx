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
        Si tienes alguna duda, queja o comentario, puedes contactarnos o
        enviarnos tus mensajes, pronto nos comunicaremos contigo. Recuerda que
        En Bici Por Colombia te brinda las mejores oportunidades para que
        conozcas Colombia en bicicleta.
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
