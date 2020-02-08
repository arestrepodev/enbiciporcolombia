import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Layout from '../../components/Layout';
import {
  DetailWrapper,
  DetailHeader,
  DetailContent,
  DetailTable
} from './style';

const Detail = ({ detailId, data }) => {
  return (
    <Layout>
      <DetailWrapper>
        <DetailHeader>
          <h1>Plan {detailId === '1' && 'Basic'}</h1>
        </DetailHeader>
        <DetailContent>
          <DetailTable>
            <p>Detalle de los Planes {detailId}</p>
          </DetailTable>
        </DetailContent>
      </DetailWrapper>
    </Layout>
  );
};

Detail.propTypes = {
  detailId: PropTypes.string
};

Detail.defaultProps = {
  detailId: '1'
};

export default Detail;
