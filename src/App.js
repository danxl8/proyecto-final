
import "./App.css";
import { useState, useEffect } from "react";
import Filter from "./Filter";
import Header from "./Header";
import Results from "./Results";
function App(props) {
  const [modo, acutalizarModo] = useState(true);
  const [busqueda, acutalizarBusqueda] = useState("");
  const [buscarBtn, actualizarBuscarBtn] = useState(false);
  const [dataGif, actualizarDataGif] = useState([]);
  const [enviar, actualizarEnviar] = useState("");
  const [dataAuto, actualizarDataAuto] = useState([]);
  const manejarModo = () => {
    acutalizarModo(!modo);
  };
  const manejarBusqueda = (e) => {
    const busqueda = e.target.value;
    acutalizarBusqueda(busqueda);
  };
  const manejarCancelarBusqueda = () => {
    acutalizarBusqueda("");
  };
  const manejarBuscarBtn = (e) => {
    e.preventDefault();
    actualizarBuscarBtn(true);
    actualizarEnviar(busqueda);
  };
  useEffect(() => {
    if (buscarBtn === true) {
      let key = "dnozkXbIHV5DHw517JitLkUyUmMQpCXb";
      let urlSearch = "https://api.giphy.com/v1/gifs/search";
      let petision = fetch(
        `${urlSearch}?api_key=${key}&q=${busqueda}&limit=12&offset=0&rating=g&lang=en`
      );
      petision
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          actualizarBuscarBtn(false);
          acutalizarBusqueda("");
          actualizarDataGif(data.data);
        });
    }
  }, [buscarBtn, busqueda]);
  useEffect(() => {
    let key = "dnozkXbIHV5DHw517JitLkUyUmMQpCXb";
    let petision = fetch(
      `https://api.giphy.com/v1/gifs/search/tags?api_key=${key}&q=${busqueda}&limit=5&offset=0&rating=g&lang=en`
    );
    petision
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        actualizarDataAuto(data.data);
      });
  }, [busqueda]);
  return (
    <div
      className={`${
        modo
          ? "App flex flex-direction align-items-center"
          : " App flex flex-direction align-items-center modo-dark "
      }`}
    >
      <Header manejarModo={manejarModo} modo={modo} />
      <Filter
        modo={modo}
        manejarBusqueda={manejarBusqueda}
        busqueda={busqueda}
        manejarBuscarBtn={manejarBuscarBtn}
        dataGif={dataGif}
        dataAuto={dataAuto}
        manejarCancelarBusqueda={manejarCancelarBusqueda}
      />
      <Results
        dataGif={dataGif}
        actualizarDataGif={actualizarDataGif}
        buscarBtn={buscarBtn}
        busqueda={busqueda}
        modo={modo}
        enviar={enviar}
      />
    </div>
  );
}

export default App;