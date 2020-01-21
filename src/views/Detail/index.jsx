import React from 'react';
import PropTypes from 'prop-types';

const Detail = ({ detailId }) => {
  return (
    <>
      <p>Detalle de los Planes {detailId}</p>
    </>
  );
};

Detail.propTypes = {
  detailId: PropTypes.string.isRequired
};

export default Detail;
