import React from 'react';
import { MdInfo, MdFace, MdLocationOn } from 'react-icons/md';
import Layout from '../../components/Layout';
import { Wrapper, HeaderPlan, ContentPlan, TablePlan, Features } from './style';

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
          </TablePlan>
        </ContentPlan>
      </Wrapper>
    </Layout>
  );
};
export default Adventure;
