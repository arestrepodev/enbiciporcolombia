import React from 'react';
import { MdInfo, MdFace, MdLocationOn } from 'react-icons/md';
import Layout from '../../components/Layout';
import { Wrapper, HeaderPlan, ContentPlan, TablePlan, Features } from './style';

const Basic = () => {
  return (
    <Layout>
      <Wrapper>
        <HeaderPlan>
          <small>Para que inicies tu aventura:</small>
          <h1>Plan Basic</h1>
        </HeaderPlan>
        <ContentPlan>
          <TablePlan>
            <Features>
              <li>
                <MdInfo />
                Nivel Básico
              </li>
              <li>
                <MdFace />
                Experiencia Media
              </li>
              <li>
                <MdLocationOn />
                Recorrido Corto
              </li>
            </Features>
          </TablePlan>
        </ContentPlan>
      </Wrapper>
    </Layout>
  );
};

export default Basic;
