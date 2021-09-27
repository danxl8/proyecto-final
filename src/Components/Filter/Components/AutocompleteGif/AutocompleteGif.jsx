import React from "react";

function AutocompleteGif({ manejarBuscarBtn, dataAuto }) {
  return (
    <div
      onClick={manejarBuscarBtn}
      className={`${
        dataAuto.length > 0
          ? "sugerencias-container margin-top-20 margin-bottom-30 "
          : ""
      }`}
    >
      <div className="relative">{Sugerencias({ dataAuto })}</div>
    </div>
  );
}

function Sugerencias({ dataAuto }) {
  return (
    <div>
      {dataAuto.map((data) => {
        return (
          <div className="relative">
            <img className="icono-buscar" src="/resource/lupa.png" alt="" />
            <li className="sugerencias font padding-left-40 flex align-items-center color-gris ">
              {" "}
              {data.name}{" "}
            </li>
          </div>
        );
      })}
    </div>
  );
}

export default AutocompleteGif;
