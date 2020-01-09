import React from "react";


const ContactForm = () => (
  <form action="#">
    <h3>Escríbe tu mensaje</h3>
    <p>Pronto nos comunicaremos contigo</p>
    <article>
      <label htmlFor="message">Tu Mensaje:</label>
      <textarea name="message" id="message" cols="30" rows="10" placeholder="Mi Mensaje..."/>
    </article>
    <article>
      <label htmlFor="name">Nombre</label>
      <input type="text" name="name" id="name" placeholder="Tu Nombre..."/>
    </article>
    <article>
      <label htmlFor="email">Email</label>
      <input type="email" name="email" id="email" placeholder="Tu Email..."/>
    </article>
  </form>
)

export default ContactForm;