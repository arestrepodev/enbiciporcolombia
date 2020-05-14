import React, { useContext } from 'react';
import { Context } from '../../Context';
import { ButtonBlue } from '../../styles/Buttons';
import { Form, Title, FormControl, Subtitle } from './style';

const ContactForm = () => {
  const { isEnglish } = useContext(Context);
  return (
    <Form action='#'>
      <Title>{isEnglish ? 'Read your Message' : 'Escríbe tu mensaje'}</Title>
      <Subtitle>
        {isEnglish
          ? 'We will contact you soon'
          : 'Pronto nos comunicaremos contigo'}
      </Subtitle>
      <FormControl>
        <label htmlFor='message'>
          {isEnglish ? 'Your Message' : 'Tu Mensaje:'}
        </label>
        <textarea
          name='message'
          id='message'
          placeholder={isEnglish ? 'My Message' : 'Mi Mensaje...'}
        />
      </FormControl>
      <FormControl>
        <label htmlFor='name'>{isEnglish ? 'Name' : 'Nombre:'}</label>
        <input
          type='text'
          name='name'
          id='name'
          placeholder={isEnglish ? 'My Name' : 'Mi nombre...'}
        />
      </FormControl>
      <FormControl>
        <label htmlFor='email'>Email</label>
        <input type='email' name='email' id='email' placeholder='Email...' />
      </FormControl>
      <FormControl>
        <ButtonBlue type='submit'>{isEnglish ? 'Send' : 'Enviar'}</ButtonBlue>
      </FormControl>
    </Form>
  );
};

export default ContactForm;
