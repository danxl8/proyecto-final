import React from "react";

const CardResultados = ({ title, images }) => {
  return (
    <img
      className="img padding-20"
      src={images.downsized_medium.url}
      alt={title}
    />
  );
};

export default CardResultados;
