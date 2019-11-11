import React from 'react';
import styled from 'styled-components';
import { MdPhone, MdMail, MdLocationOn } from 'react-icons/md';
import { ButtonBlue } from '../styles/Buttons';

const FooterWrapper = styled.footer`
  background-color: var(--color-black);
  padding: 2rem 1rem;
  color: var(--color-white);
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  grid-gap: 0 1rem;
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1rem;
  }
  @media screen and (max-width: 468px) {
    grid-template-columns: 1fr;
    grid-gap: 1rem;
  }
`;

const FooterArticle = styled.article`
  h5 {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }
  p {
    padding: 0.5rem 0;
    line-height: 1.2;
    font-size: 0.9rem;
  }
`;
const FooterList = styled.ul`
  li {
    display: flex;
    align-items: center;
    line-height: 1.8;
    font-size: 14px;
    svg {
      margin-right: 5px;
    }
    a {
      color: rgba(255, 255, 255, 0.8);
      text-decoration: none;
      &:hover {
        color: var(--color-white);
        text-decoration: underline;
      }
    }
  }
`;

const FooterForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0.5rem 0;
  input {
    margin-bottom: 0.5rem;
    background-color: rgba(0, 0, 0, 0.7);
    padding: 0.6rem 0.7rem;
    border: none;
    border-radius: 3px;
    outline-color: var(--color-blue);
    color: var(--color-white);
  }
  button {
    padding: 0.6rem 0.8rem;
    border-radius: 3px;
  }
`;

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
            <MdMail /> travel@enbiciporcolombia.com
          </li>
          <li>
            <MdPhone /> 3456789
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
