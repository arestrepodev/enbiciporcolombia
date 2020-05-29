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

const Extreme = () => {
  const { isEnglish } = useContext(Context);
  return (
    <Layout>
      <Wrapper>
        <HeaderPlan>
          <small>
            {isEnglish
              ? 'To challenge your mind:'
              : 'Para que desafies tu mente:'}
          </small>
          <h1>{isEnglish ? 'Extreme Plan' : 'Plan Extreme'}</h1>
        </HeaderPlan>
        <ContentPlan>
          <TablePlan>
            <Features>
              <li>
                <MdInfo />
                {isEnglish ? 'High Level' : 'Nivel Medio'}
              </li>
              <li>
                <MdFace />
                {isEnglish ? 'High experience' : 'Experiencia Alta'}
              </li>
              <li>
                <MdLocationOn />
                {isEnglish ? 'Extreme Tours' : 'Recorridos Extremos'}
              </li>
            </Features>
            <Detail>
              <TitleGroup>
                <h1>{isEnglish ? 'Extreme Plan' : 'Plan Extreme'}</h1>
                {/* <small>
                  <span>$2.500.000</span>/{' '}
                  {isEnglish ? 'For Person' : 'Por Persona'}
                </small> */}
              </TitleGroup>
              <Description>
                <div>
                  <p>
                    {isEnglish
                      ? 'This expert plan will put high-performance cyclists to the test in the climates and incredible landscapes of Colombia. You will face mountains, mist, rain and harsh sun. But in the end you will feel the satisfaction of having achieved it.'
                      : 'Este plan para expertos pondrá a prueba a los ciclistas de alto rendimiento ante los climas y los increíbles paisajes de Colombia. Te mediras a montañas, neblina, lluvia y sol inclemente. Pero al final sentirás la satisfacción de haberlo logrado.'}
                  </p>
                  <p>
                    {isEnglish
                      ? 'The plan includes:'
                      : 'El Plan Extreme incluye:'}
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
                  <h4>{isEnglish ? 'Gallery:' : 'Galeria:'}</h4>{' '}
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
                    {isEnglish ? 'I want to book' : 'Quiero reservar'}
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
