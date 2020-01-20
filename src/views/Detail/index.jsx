import React from "react";
import PropTypes from "prop-types";

const Detail = ({ id }) => {
  console.log(id);
  
  return(
    <section>
      <p>Detalle de los Planes {id}</p>
    </section>
  )
}

// Detail.propTypes = {
//   detailId: PropTypes.string.isRequired
// }



export default Detail;