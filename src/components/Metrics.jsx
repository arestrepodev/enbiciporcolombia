import React from 'react';
import styled from 'styled-components';
import { IMG_PATH } from '../helpers';

const MetricsWrapper = styled.section`
  width: 100%;
  height: auto;
  margin: 0 auto;
  overflow: hidden;
`;

const MetricsImages = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  img {
    width: 100%;
    height: auto;
    background-clip: border-box;
  }
  @media screen and (max-width: 580px) {
    grid-template-columns: repeat(2, 1fr);
    img {
      width: 100%;
      height: auto;
    }
  }
`;

const MetricsNumbers = styled.article`
  width: 100%;
  height: auto;
  padding: 3rem 0;
  background: var(--color-blue);
  color: var(--color-white);
  ul {
    width: 70%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    li {
      display: flex;
      align-items: center;
      flex-direction: column;
      text-align: center;
    }
  }
  h4 {
    font-size: 2.5rem;
    margin: 0 0 0.3rem 0;
  }
  @media screen and (max-width: 580px) {
    ul {
      width: 90%;
      flex-grow: 1 1;
    }
  }
  @media screen and (max-width: 380px) {
    ul {
      width: 90%;
    }
  }
`;

const Metrics = () => {
  return (
    <MetricsWrapper>
      <MetricsImages>
        <img
          src={`${IMG_PATH}paisaje-galeria-horizonte.jpg`}
          alt='Horizonte Paisaje'
        />
        <img
          src={`${IMG_PATH}ciclista-clima-nublado.jpg`}
          alt='Ciclista Nublado'
        />
        <img src={`${IMG_PATH}bici-descansando.jpg`} alt='Bici Descansando' />
        <img src={`${IMG_PATH}fotopaisaje.jpg`} alt='Fotopaisaje' />
      </MetricsImages>
      <MetricsNumbers>
        <ul>
          <li>
            <h4>256</h4>
            <small>Solicitudes</small>
          </li>
          <li>
            <h4>20</h4>
            <small>Ciudades</small>
          </li>
          <li>
            <h4>400</h4>
            <small>Hoteles</small>
          </li>
          <li>
            <h4>8</h4>
            <small>Planes</small>
          </li>
        </ul>
      </MetricsNumbers>
    </MetricsWrapper>
  );
};

export default Metrics;
