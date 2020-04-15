import React from 'react';
import { MdInfo, MdFace, MdLocationOn } from 'react-icons/md';
import Layout from '../../components/Layout';
import { LinkButtonBlueSmall } from '../../styles/Buttons';
import { IMG_PATH } from '../../helpers';
import {
  Wrapper,
  HeaderPlan,
  ContentPlan,
  TablePlan,
  Features,
  Detail,
  TitleGroup,
  Description,
  Gallery,
} from './style';

const Extreme = () => {
  return (
    <Layout>
      <Wrapper>
        <HeaderPlan>
          <small>Para que desafies tu mente:</small>
          <h1>Plan Extreme</h1>
        </HeaderPlan>
        <ContentPlan>
          <TablePlan>
            <Features>
              <li>
                <MdInfo />
                Nivel Avanzado
              </li>
              <li>
                <MdFace />
                Experiencia Alta
              </li>
              <li>
                <MdLocationOn />
                Recorridos Extremos
              </li>
            </Features>
            <Detail>
              <TitleGroup>
                <h1>Plan Extreme</h1>
                <small>
                  <span>$2.500.000</span>/ por Persona
                </small>
              </TitleGroup>
              <Description>
                <div>
                  <p>
                    Este plan se adecua a todos las personas que quieran iniciar
                    a conocer Colombia en su bicicleta, realizamos recorridos
                    cortos y llenos de aventura que van a desafiar tu mente. Nos
                    encargamos de todos los detalles para que no tengas que
                    planear nada, recorreras y disfrutaras de los paisajes.
                  </p>
                  <p>
                    El <strong> Plan Adventure</strong> incluye:
                  </p>
                  <ol>
                    <li>Transporte Aeropuerto</li>
                    <li>Alimentación durante el recorrido</li>
                    <li>Visita a sitios de interés</li>
                    <li>Hidratación y refrigerio</li>
                    <li>Hotel</li>
                  </ol>
                  <h4>Galeria:</h4>
                  <Gallery>
                    <img
                      src={`${IMG_PATH}basic-nairo.jpg`}
                      alt='Foto Nairo Quintana'
                    />
                    <img src={`${IMG_PATH}basic-quebrada.jpg`} alt='Quebrada' />
                    <img
                      src={`${IMG_PATH}basic-rio.jpg`}
                      alt='Plan Básico Río'
                    />
                  </Gallery>
                  <LinkButtonBlueSmall className='is-block' to='/extreme'>
                    Quiero Reservar
                  </LinkButtonBlueSmall>
                </div>
                <img
                  src={`${IMG_PATH}plan-extreme.jpg`}
                  alt='Imagen Plan Extreme'
                />
              </Description>
            </Detail>
          </TablePlan>
        </ContentPlan>
      </Wrapper>
    </Layout>
  );
};

export default Extreme;
