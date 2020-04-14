import React from 'react';
import { MdInfo, MdFace, MdLocationOn } from 'react-icons/md';
import Layout from '../../components/Layout';

import {
  Wrapper,
  HeaderPlan,
  ContentPlan,
  TablePlan,
  Features,
  Detail,
  TitleGroup,
  Description,
  List,
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
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                  magnam beatae vitae nostrum accusamus ad vel minus numquam
                  cupiditate. Qui quae neque officiis. Autem eius qui,
                  voluptatem dolore ea vero, fugiat, blanditiis fugit odio sint
                  sunt nihil unde ex ipsa.
                </p>
                <img
                  src='https://enbici.s3.us-east-2.amazonaws.com/images/plan-extreme.jpg'
                  alt='Imagen Plan Basic'
                />
              </Description>
              <List>
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
              </List>
              <Gallery>
                <img src='' alt='Foto 1' />
                <img src='' alt='Foto 2' />
                <img src='' alt='Foto 3' />
              </Gallery>
            </Detail>
          </TablePlan>
        </ContentPlan>
      </Wrapper>
    </Layout>
  );
};

export default Extreme;
