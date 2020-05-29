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

const Basic = () => {
  const { isEnglish } = useContext(Context);
  return (
    <Layout>
      <Wrapper>
        <HeaderPlan>
          <small>
            {isEnglish
              ? 'Your Adventure Begins:'
              : 'Para que inicies tu aventura:'}
          </small>
          <h1>{isEnglish ? 'Basic Plan' : 'Plan Basic'}</h1>
        </HeaderPlan>
        <ContentPlan>
          <TablePlan>
            <Features>
              <li>
                <MdInfo />
                {isEnglish ? 'Basic Level' : 'Nivel Básico'}
              </li>
              <li>
                <MdFace />
                {isEnglish ? 'Middle Experience' : 'Experiencia Media'}
              </li>
              <li>
                <MdLocationOn />
                {isEnglish ? 'Short Tour' : 'Recorrido Corto'}
              </li>
            </Features>
            <Detail>
              <TitleGroup>
                <h2>{isEnglish ? 'Basic Plan' : 'Plan Basic'}</h2>
                {/* <small>
                  <span>$700.000</span>/{' '}
                  {isEnglish ? 'For Person' : 'Por Persona'}
                </small> */}
              </TitleGroup>
              <Description>
                <div>
                  <p>
                    {isEnglish
                      ? 'This plan is for all people who want to know Colombia on their bicycle, we make short tours full of adventure that will challenge your mind. We take care of all the details so that you do not have to plan anything, you will travel and enjoy the landscapes'
                      : 'Este plan se adecua a todos las personas que quieran iniciar a conocer Colombia en su bicicleta, realizamos recorridos cortos y llenos de aventura que van a desafiar tu mente. Nos encargamos de todos los detalles para que no tengas que planear nada, recorreras y disfrutaras de los paisajes.'}
                  </p>
                  <p>
                    {isEnglish
                      ? 'The plan includes:'
                      : 'El Plan Basic incluye:'}
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
                      src={`${IMG_PATH}basic-nairo.jpg`}
                      alt='Foto Nairo Quintana'
                    />
                    <img src={`${IMG_PATH}basic-quebrada.jpg`} alt='Quebrada' />
                    <img
                      src={`${IMG_PATH}basic-rio.jpg`}
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
                  src={`${IMG_PATH}plan-basic.jpg`}
                  alt='Imagen Plan Basic'
                />
              </Description>
            </Detail>
          </TablePlan>
        </ContentPlan>
      </Wrapper>
    </Layout>
  );
};

export default Basic;
