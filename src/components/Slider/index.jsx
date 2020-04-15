import React, { useState } from 'react';
import { MdSkipNext, MdSkipPrevious } from 'react-icons/md';
import { SliderWrapper, Slide, GoLeft, GoRight } from './style';
import { IMG_PATH } from '../../helpers';

const Image = ({ src, alt }) => <img src={src} alt={alt} />;

const Slider = () => {
  const [xAxis, setXAxis] = useState(0);
  // Slider Array
  const sliderArr = [
    <Image src={`${IMG_PATH}slide-montana.jpg`} alt='Montaña' />,
    <Image src={`${IMG_PATH}slide-equipo.jpg`} alt='Equipo' />,
    <Image src={`${IMG_PATH}slide-montana-bici.jpg`} alt='Montaña Bici' />,
    <Image
      src={`${IMG_PATH}slide-equipo-completo.jpg`}
      alt='Equipo Completo'
    />,
  ];

  const goLeft = () => {
    // eslint-disable-next-line no-unused-expressions
    xAxis === 0
      ? setXAxis(-100 * (sliderArr.length - 1))
      : setXAxis(xAxis + 100);
  };

  const goRight = () => {
    // eslint-disable-next-line no-unused-expressions
    xAxis === -100 * (sliderArr.length - 1)
      ? setXAxis(0)
      : setXAxis(xAxis - 100);
  };

  return (
    <SliderWrapper>
      {sliderArr.map((slider, index) => (
        <Slide key={index} style={{ transform: `translateX(${xAxis}%)` }}>
          {slider}
        </Slide>
      ))}
      <GoLeft id='goLeft' onClick={goLeft} type='button'>
        <MdSkipPrevious />
      </GoLeft>
      <GoRight id='goTight' onClick={goRight} type='button'>
        <MdSkipNext />
      </GoRight>
    </SliderWrapper>
  );
};

export default Slider;
