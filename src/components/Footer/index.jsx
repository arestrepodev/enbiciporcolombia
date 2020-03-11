import React from 'react';
import { MdPhone, MdMail, MdLocationOn } from 'react-icons/md';
import { FooterWrapper, FooterArticle, FooterList, FooterForm } from './style';
import { ButtonBlue } from '../../styles/Buttons';

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterArticle>
        <h5>Acerca de:</h5>
        <p>
          &copy; Enbiciporcolombia es una marca registrada, cambiamos el
          paradigma de viajar por Colombia.
        </p>
        <FooterList>
          <li>
            <MdMail /> quieroviajar@enbiciporcolombia.com
          </li>
          <li>
            <MdPhone /> 312 4679089 - Colombia
          </li>
          <li>
            <MdPhone /> 416 7748900 - Canadá
          </li>
          <li>
            <MdLocationOn /> Bogotá, Colombia.
          </li>
        </FooterList>
      </FooterArticle>
      <FooterArticle>
        <h5>Noticias:</h5>
        <p>
          En Colombia hay miles de paraisos por visitar en tu bici, atento a
          nuestras publicaciones:
        </p>
        <FooterList>
          <li>
            <a href='/'>Ganas, Perseverancia y Bici</a>
          </li>
          <li>
            <a href='/'>El panorama del ciclismo</a>
          </li>
          <li>
            <a href='/'>Nuestros jóvenes ciclistas</a>
          </li>
        </FooterList>
      </FooterArticle>
      <FooterArticle>
        <h5>Suscríbete:</h5>
        <p>
          Haz parte del mundo enbiciporcolombia y no te pierdas de ninguna
          novedad:
        </p>
        <FooterForm>
          <input type='text' placeholder='Nombre' required />
          <input type='email' placeholder='Email' required />
          <ButtonBlue type='submit'>Suscribirme</ButtonBlue>
        </FooterForm>
      </FooterArticle>
      <FooterArticle>
        <h5>Galeria:</h5>
        <p>Las mejores fotos de nuestros clientes durante sus viajes:</p>
      </FooterArticle>
    </FooterWrapper>
  );
};

export default Footer;
