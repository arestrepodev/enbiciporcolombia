import React, { useContext } from 'react';
import { MdPhone, MdMail, MdLocationOn } from 'react-icons/md';
import { Context } from '../../Context';
import {
  FooterWrapper,
  FooterArticle,
  FooterList,
  FooterForm,
  Gallery,
} from './style';
import { ButtonBlue } from '../../styles/Buttons';
import { IMG_PATH } from '../../helpers';

const Footer = () => {
  const { isEnglish } = useContext(Context);
  return (
    <FooterWrapper>
      <FooterArticle>
        <h5>{isEnglish ? 'About us:' : 'Acerca de:'}</h5>
        <p>
          {isEnglish
            ? `© Enbiciporcolombia is a registered trademark, we changed the paradigm of traveling in Colombia.`
            : `© Enbiciporcolombia es una marca registrada, cambiamos el paradigma de viajar por Colombia.`}
        </p>
        <FooterList>
          <li>
            <MdMail />{' '}
            {isEnglish
              ? 'travel@enbiciporcolombia.com'
              : 'quieroviajar@enbiciporcolombia.com'}
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
        <h5>{isEnglish ? 'News:' : 'Noticias:'}</h5>
        <p>
          {isEnglish
            ? 'In Colombia there are thousands of paradises to visit on your bike, attentive to our publications:'
            : 'En Colombia hay miles de paraisos por visitar en tu bici, atento a nuestras publicaciones:'}
        </p>
        <FooterList>
          <li>
            <a href='/'>
              {isEnglish
                ? 'Win, Perseverance and Bike'
                : 'Ganas, Perseverancia y Bici'}{' '}
            </a>
          </li>
          <li>
            <a href='/'>
              {isEnglish ? 'The cycling panorama' : 'El panorama del ciclismo'}
            </a>
          </li>
          <li>
            <a href='/'>
              {isEnglish ? 'Our Young Cyclists' : 'Nuestros jóvenes ciclistas'}
            </a>
          </li>
        </FooterList>
      </FooterArticle>
      <FooterArticle>
        <h5>{isEnglish ? 'Subscribe:' : 'Suscríbete:'} </h5>
        <p>
          {isEnglish
            ? "Become part of the world in Colombia and don't miss any news:"
            : 'Haz parte del mundo enbiciporcolombia y no te pierdas de ninguna novedad:'}
        </p>
        <FooterForm
          method='POST'
          id='formulario-suscripcion-enbici'
          action='https://formsubmit.io/send/c21acb26-489c-4ef8-bb81-1312ea72fedf'
        >
          <input
            type='text'
            name='name'
            id='name'
            placeholder={isEnglish ? 'Name:' : 'Nombre'}
            required
          />
          <input
            name='email'
            id='email'
            type='email'
            placeholder='Email'
            required
          />
          <input
            name='_subscribeFormEnBici'
            id='_subscribeFormEnBici'
            type='text'
            className='is--display--none'
          />
          <ButtonBlue type='submit'>
            {isEnglish ? 'Subscribe' : 'Suscribirme'}
          </ButtonBlue>
        </FooterForm>
      </FooterArticle>
      <FooterArticle>
        <h5>{isEnglish ? 'Gallery:' : 'Galeria:'}</h5>
        <p>
          {isEnglish
            ? 'The best photos of our clients during their trips:'
            : 'Las mejores fotos de nuestras aventuras en bicicleta:'}
        </p>
        <Gallery>
          <img
            src={`${IMG_PATH}extreme-neblina.jpg`}
            alt='Foto Nairo Quintana'
          />
          <img
            src={`${IMG_PATH}adventure-lloviendo.jpg`}
            alt='Adventure Lloviendo'
          />
          <img src={`${IMG_PATH}basic-quebrada.jpg`} alt='Quebrada' />
          <img
            src={`${IMG_PATH}adventure-destapado.jpg`}
            alt='Recorrido Destapado'
          />
          <img src={`${IMG_PATH}extreme-equipo.jpg`} alt='Plan Extreme Rio' />
          <img
            src={`${IMG_PATH}extreme-destapado.jpg`}
            alt='Plan Extreme Destapado'
          />
        </Gallery>
      </FooterArticle>
    </FooterWrapper>
  );
};

export default Footer;
