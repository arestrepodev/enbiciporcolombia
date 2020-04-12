import React from 'react';
import { MdInfo, MdFace, MdLocationOn } from 'react-icons/md';
import Layout from '../../components/Layout';
import { Wrapper, HeaderPlan, ContentPlan, TablePlan, Features } from './style';

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
          </TablePlan>
        </ContentPlan>
      </Wrapper>
    </Layout>
  );
};

export default Extreme;
