import React, { useState, useContext } from 'react';
import { MdSkipNext, MdSkipPrevious } from 'react-icons/md';
import { SliderWrapper, Slide, GoLeft, GoRight } from './style';
import { Context } from '../../Context';
import { IMG_PATH } from '../../helpers';
import Content from './Content';

const Slider = () => {
  const [xAxis, setXAxis] = useState(0);
  const { isEnglish } = useContext(Context);
  // Slider Array
  const sliderArr = [
    <Content
      src={`${IMG_PATH}slide-montana.jpg`}
      alt='Montaña'
      text={
        isEnglish
          ? 'Enjoy Enbiciporcolombia with incredible plans, you can live the best adventures.'
          : 'Disfruta Enbiciporcolombia con increíbles planes, para que vivas las mejores aventuras.'
      }
    />,
    <Content
      src={`${IMG_PATH}slide-equipo.jpg`}
      alt='Equipo'
      text={
        isEnglish
          ? 'Break your limits, the satisfaction is at goal!'
          : 'Rompe tus limites, ¡La satisfaccion esta en la meta!'
      }
    />,
    <Content
      src={`${IMG_PATH}slide-montana-bici.jpg`}
      alt='Slide Montaña En Bici'
      text={
        isEnglish ? 'Enjoy the Pedal World!' : 'Disfruta el ¡Mundo en Pedales!'
      }
    />,
    <Content
      src={`${IMG_PATH}equipo-cesped.jpg`}
      alt='Slide Equipo Completo'
      text={
        isEnglish
          ? 'It doesn`t matter how long it takes you. The important thing is that you arrive!'
          : 'No importa cuanto te demores. !Lo importante es que llegues!'
      }
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
