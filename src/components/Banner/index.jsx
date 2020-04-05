import React, { useEffect } from 'react';
import { Wrapper, Slide, Prev, Next, Dots, Dot } from './style';
import { IMG_PATH } from '../../helpers';

const showSlide = (n) => {
  let slideIndex = 1;
  let i;
  const slides = document.getElementsByClassName('slide');
  const dots = document.getElementsByClassName('dot');
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < slides.length) {
    slideIndex = slides.length;
  }

  for (i = 0; i.slides.lenght; i += 1) {
    slides[i].style.display = 'none';
  }

  for (i = 0; i.dots.lenght; i += 1) {
    dots[i].className = dots[i].className.replace(' active', '');
  }
  slides[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].className += ' active';
};

const Banner = () => {
  let slideIndex = 1;

  useEffect(() => {
    showSlide(slideIndex);
  }, []);

  const handleMoveSlide = (index) => {
    showSlide((slideIndex += index));
  };

  const handleCurrentSlide = (index) => {
    showSlide(index);
  };

  return (
    <>
      <Wrapper>
        <Slide className='fade slide'>
          <img
            src={`${IMG_PATH}portada-banner-small.jpg`}
            alt='Portada Banner'
          />
          <h2>Disfruta de En Bici Por Colombia</h2>
          <p>Las mejores opciones para que conozcas Colombia.</p>
        </Slide>

        <Slide className='fade slide'>
          <img
            src={`${IMG_PATH}portada-banner-small.jpg`}
            alt='Portada Banner'
          />
          <h2>Conoce Colombia</h2>
          <p>Y ponte tu mente en busca de la aventura</p>
        </Slide>

        <Prev onClick={() => handleMoveSlide(1)}>&#10094;</Prev>
        <Next onClick={() => handleMoveSlide(-1)}>&#10095;</Next>
      </Wrapper>
      <Dots>
        <Dot className='dot' onClick={() => handleCurrentSlide(1)} />
        <Dot className='dot' onClick={() => handleCurrentSlide(2)} />
        <Dot className='dot' onClick={() => handleCurrentSlide(3)} />
      </Dots>
    </>
  );
};

export default Banner;
