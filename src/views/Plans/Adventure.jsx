import React from 'react';
import { MdInfo, MdFace, MdLocationOn } from 'react-icons/md';
import Layout from '../../components/Layout';
import { AncleBlueSmall } from '../../styles/Buttons';
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

const Adventure = () => {
  return (
    <Layout>
      <Wrapper>
        <HeaderPlan>
          <small>Para que avances:</small>
          <h1>Plan Adventure</h1>
        </HeaderPlan>
        <ContentPlan>
          <TablePlan>
            <Features>
              <li>
                <MdInfo />
                Nivel Medio
              </li>
              <li>
                <MdFace />
                Experiencia Alta
              </li>
              <li>
                <MdLocationOn />
                Recorridos Largos
              </li>
            </Features>
            <Detail>
              <TitleGroup>
                <h1>Plan Adventure</h1>
                <small>
                  <span>$1.200.000</span>/ por Persona
                </small>
              </TitleGroup>
              <Description>
                <div>
                  <p>
                    Este plan reta a las personas que hagan ciclismo para
                    aficionados de alto nivel a descrubir nuevos paisajes,
                    tramos y rutas, te enfrentaras a territorios difíciles que
                    pondrán a prueba tu mente y tu corazón.
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
                      src={`${IMG_PATH}adventure-destapado.jpg`}
                      alt='Recorrido Destapado'
                    />
                    <img
                      src={`${IMG_PATH}adventure-lloviendo.jpg`}
                      alt='Adventure Lloviendo'
                    />
                    <img
                      src={`${IMG_PATH}adventure-equipo.jpg`}
                      alt='Plan Básico Río'
                    />
                  </Gallery>
                  <AncleBlueSmall
                    className='is-block'
                    href='https://wa.link/yvwpyc'
                  >
                    Quiero Reservar
                  </AncleBlueSmall>
                </div>
                <img
                  src={`${IMG_PATH}plan-adventure.jpg`}
                  alt='Imagen Plan Adventure'
                />
              </Description>
            </Detail>
          </TablePlan>
        </ContentPlan>
      </Wrapper>
    </Layout>
  );
};
export default Adventure;
