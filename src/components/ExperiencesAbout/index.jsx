import React from 'react';
import StyledTitle from '../StyledTitle';

const ExperiencesAbout = () => {
  return (
    <>
      <StyledTitle subtitle='Vive una Aventura' title='Sobre tu Bici' />
      <section>
        <article>
          <img
            src='https://i.picsum.photos/id/244/300/400.jpg'
            alt='adventure'
          />
          <h3>Aventura</h3>
          <p>Cada salida es una aventura por Colombia.</p>
        </article>
        <article>
          <h3>Diversión</h3>
          <p>La diversión te espera.</p>
          <img src='https://i.picsum.photos/id/191/300/400.jpg' alt='party' />
        </article>
        <article>
          <h3>Adrenalina</h3>
          <p>Cada curva, cada tramo un desafio.</p>
          <img
            src='https://i.picsum.photos/id/196/300/400.jpg'
            alt='adrenaline'
          />
        </article>
      </section>
    </>
  );
};

export default ExperiencesAbout;
