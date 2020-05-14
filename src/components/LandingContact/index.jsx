import React, { useContext } from 'react';
import { Context } from '../../Context';
import { IMG_PATH } from '../../helpers/index';
import {
  LandingWrapper,
  LandingTitle,
  LandingSubtitle,
  LandingDescription,
  LandingImage,
} from './style';

const LandingContact = () => {
  const { isEnglish } = useContext(Context);
  return (
    <LandingWrapper>
      <article>
        <LandingTitle>{isEnglish ? 'Contact Us' : 'Contáctanos'}</LandingTitle>
        <LandingSubtitle>
          {isEnglish
            ? 'You will find the best plans for you to discover Colombia by bike, train, train and challenge your abilities.'
            : 'Econtrarás los mejores planes para que descubras Colombia en Bici, capacítate, entrénate y reta tus capacidades.'}
        </LandingSubtitle>
        <LandingDescription>
          {isEnglish
            ? 'If you have any questions, complaints or comments, you can contact us or send us your messages, we will contact you soon. Remember that En Bici Por Colombia offers you the best opportunities to get to know Colombia by bicycle'
            : 'Si tienes alguna duda, queja o comentario, puedes contactarnos o enviarnos tus mensajes, pronto nos comunicaremos contigo. Recuerda que En Bici Por Colombia te brinda las mejores oportunidades para que conozcas Colombia en bicicleta.'}
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
};

export default LandingContact;
