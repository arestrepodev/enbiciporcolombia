import React, { useContext } from 'react';
import { MdInfo, MdFace, MdLocationOn } from 'react-icons/md';
import { Context } from '../../Context';
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
  const { isEnglish } = useContext(Context);
  return (
    <Layout>
      <Wrapper>
        <HeaderPlan>
          <small>
            {isEnglish ? 'For you to advance:' : 'Para que avances:'}
          </small>
          <h1>{isEnglish ? 'Adventure Plan' : 'Plan Adventure'}</h1>
        </HeaderPlan>
        <ContentPlan>
          <TablePlan>
            <Features>
              <li>
                <MdInfo />
                {isEnglish ? 'Middle Level' : 'Nivel Medio'}
              </li>
              <li>
                <MdFace />
                {isEnglish ? 'High experience' : 'Experiencia Alta'}
              </li>
              <li>
                <MdLocationOn />
                {isEnglish ? 'Long Tours' : 'Recorridos Largos'}
              </li>
            </Features>
            <Detail>
              <TitleGroup>
                <h2>{isEnglish ? 'Plan Adventure' : 'Adventure Plan'}</h2>
                {/* <small>
                  <span>$1.200.000</span>/{' '}
                  {isEnglish ? 'For Person' : 'Por Persona'}
                </small> */}
              </TitleGroup>
              <Description>
                <div>
                  <p>
                    {isEnglish
                      ? 'This plan challenges people who cycle for high-level amateurs to discover new landscapes, sections and routes, you will face difficult territories that will test your mind and heart.'
                      : 'Este plan reta a las personas que hagan ciclismo para aficionados de alto nivel a descrubir nuevos paisajes, tramos y rutas, te enfrentaras a territorios difíciles que pondrán a prueba tu mente y tu corazón.'}
                  </p>
                  <p>
                    {isEnglish
                      ? 'The plan includes:'
                      : 'El Plan Adventure incluye:'}
                  </p>
                  <ol>
                    <li>
                      {isEnglish
                        ? 'Transport from the Airport'
                        : 'Transporte Aeropuerto'}
                    </li>
                    <li>
                      {isEnglish
                        ? 'Alimentación durante el recorrido'
                        : 'Food during the tour'}
                    </li>
                    <li>
                      {isEnglish
                        ? 'Visit to tourist sites'
                        : 'Visita a sitios de interés'}
                    </li>
                    <li>
                      {isEnglish
                        ? 'Hydration and refreshment'
                        : 'Hidratación y refrigerio'}
                    </li>
                    <li>Hotel</li>
                  </ol>
                  <h4>{isEnglish ? 'Gallery:' : 'Galeria:'}</h4>
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
                    {isEnglish ? 'I want to book' : 'Quiero reservar'}
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
