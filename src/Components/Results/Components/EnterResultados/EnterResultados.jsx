import React from "react";

const EnterResultados = ({ title, images }) => {
  return (
    <img
      className="img padding-20"
      src={images.downsized_medium.url}
      alt={title}
    />
  );
};

export default EnterResultados;
