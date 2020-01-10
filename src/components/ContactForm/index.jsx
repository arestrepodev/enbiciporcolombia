import React from 'react';
import { ButtonBlue } from '../../styles/Buttons';
import { Form, Title, FormControl, Subtitle } from './style';

const ContactForm = () => (
  <Form action='#'>
    <Title>Escríbe tu mensaje</Title>
    <Subtitle>Pronto nos comunicaremos contigo</Subtitle>
    <FormControl>
      <label htmlFor='message'>Tu Mensaje:</label>
      <textarea name='message' id='message' placeholder='Mi Mensaje...' />
    </FormControl>
    <FormControl>
      <label htmlFor='name'>Nombre</label>
      <input type='text' name='name' id='name' placeholder='Tu Nombre...' />
    </FormControl>
    <FormControl>
      <label htmlFor='email'>Email</label>
      <input type='email' name='email' id='email' placeholder='Tu Email...' />
    </FormControl>
    <FormControl>
      <ButtonBlue type='submit'>Enviar</ButtonBlue>
    </FormControl>
  </Form>
);

export default ContactForm;
