import React from "react";
import CardResultados from "../CardResultados/CardResultados";
import NotFound from "../NotFound/NotFound";

function TotalCards({ gifs, enviar, buscarBtn, modo }) {
  return (
    <div>
      <h3
        className={`${
          modo
            ? "margin-top-60 font color weight-400 flex justify-content-center"
            : "margin-top-60 font color-white weight-400 flex justify-content-center"
        }`}
      >
        {`Resultados de la búsqueda`}{" "}
      </h3>
      {gifs.length > 0 && enviar !== "" ? (
        OnlyCards({ gifs })
      ) : gifs !== [] && buscarBtn === false ? (
        <NotFound />
      ) : (
        <></>
      )}
    </div>
  );

  function OnlyCards() {
    return (
      <div
        className={`${
          modo
            ? "margin-top-20 flex fondo-light flex-wrap margin-bottom-30 justify-content-center "
            : "margin-top-20 flex fondo-dark flex-wrap margin-bottom-30 justify-content-center "
        }`}
      >
        {gifs.map((gif) => {
          return <CardResultados key={gif.id} {...gif} />;
        })}
      </div>
    );
  }
}

export default TotalCards;
