import React from 'react';
import { IMG_PATH } from '../../helpers';
import { MetricsWrapper, MetricsImages, MetricsNumbers } from './style';

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
