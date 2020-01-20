import React from "react";
import PropTypes from "prop-types";

const Detail = ({ detailId }) => {
  console.log(detailId);
  
  return(
    <section>
      <p>Detalle de los Planes {detailId}</p>
    </section>
  )
}

Detail.propTypes = {
  detailId: PropTypes.string.isRequired
}



export default Detail;