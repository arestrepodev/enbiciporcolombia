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
                    Este plan para expertos pondrá a prueba a los ciclistas de
                    alto rendimiento ante los climas y los increíbles paisajes
                    de Colombia. Te mediras a montañas, neblina, lluvia y sol
                    inclemente. Pero al final sentirás la satisfacción de
                    haberlo logrado.
                  </p>
                  <p>
                    El <strong> Plan Extreme</strong> incluye:
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
                      src={`${IMG_PATH}extreme-neblina.jpg`}
                      alt='Plan Extreme Neblina'
                    />
                    <img
                      src={`${IMG_PATH}extreme-destapado.jpg`}
                      alt='Quebrada'
                    />
                    <img
                      src={`${IMG_PATH}extreme-equipo.jpg`}
                      alt='Plan Extreme Rio'
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
