import React from "react";
import AutocompleteGif from "./Components/AutocompleteGif/AutocompleteGif";

function Filter({
  modo,
  manejarBusqueda,
  busqueda,
  manejarBuscarBtn,
  dataGif,
  dataAuto,
  manejarCancelarBusqueda,
}) {
  return (
    <div className="filter flex align-items-center flex-direction ">
      <h1
        className={`${
          modo ? "font weight-400 color" : "font weight-400 color-white"
        }`}
      >
        ¡Inspirate y busca los mejores <span className="weight-900">GIFS</span>!{" "}
      </h1>
      <img src="/resource/ilustra_header.svg" alt="lustracion header" />
      <form className="flex" onSubmit={manejarBuscarBtn}>
        .
        <div className="flex align-items-center">
          <div className="relative">
            <img
              onClick={manejarCancelarBusqueda}
              className="icono-cerrar"
              src={busqueda !== "" ? "/resource/cerrar.svg" : ""}
              alt=""
            />
            <input
              className={`${
                modo
                  ? "input font color-gris size-18 padding-left-19"
                  : "input-dark font color-white size-18 padding-left-19"
              }`}
              onChange={manejarBusqueda}
              value={busqueda}
              placeholder=" Buscar Gif"
              type="text"
            />
          </div>
          <button className="btn-busqueda">
            <img src="/resource/icon-search-mod-noc.svg" alt="buscar" />
          </button>
        </div>
        {busqueda === "" ? (
          <></>
        ) : dataGif.length >= 0 && busqueda !== "" ? (
          <AutocompleteGif
            dataAuto={dataAuto}
            manejarBuscarBtn={manejarBuscarBtn}
          />
        ) : (
          <></>
        )}
      </form>
    </div>
  );
}

export default Filter;
