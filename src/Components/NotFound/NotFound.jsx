import React from "react";

function NotFound() {
  return (
    <div>
      <div className="not-found margin-bottom-30 margin-top-20 flex flex-direction justify-content-center align-items-center">
        <img width="230" src="/resource/confusion.svg" alt="" />
        <br />
        <h1 className="font color-white weight-400 ">
          Lo sentimos no encontramos lo que buscas
        </h1>
        <h2 className="font color-white">¡Inténtalo de nuevo!</h2>
      </div>
    </div>
  );
}

export default NotFound;
