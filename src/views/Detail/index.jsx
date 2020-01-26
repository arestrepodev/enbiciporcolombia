import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../../components/Layout';

const Detail = ({ detailId }) => {
  return (
    <Layout>
      <p>Detalle de los Planes {detailId}</p>
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
