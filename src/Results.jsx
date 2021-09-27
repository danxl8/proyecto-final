import React  from "react";
import TotalCards from "./TotalCards";

const Results = ({ modo, dataGif, buscarBtn, enviar }) => {
  return (
    <div>
        {
          <div>
            {dataGif !== [] && enviar === "" ? (
              <h1
                className={`${
                  modo
                    ? " margin-top-20  font color weight-400 flex justify-content-center "
                    : " margin-top-20 max font color-white weight-400 flex justify-content-center "
                }`}
              >
                Realiza tu busqueda
              </h1>
            ) : dataGif !== [] && buscarBtn === true ? (Loader()):
            (
              <TotalCards
                gifs={dataGif}
                buscarBtn={buscarBtn}
                enviar={enviar}
                modo={modo}
              />
            )
          }
          </div>
        }
    </div>
  );
};

function Loader() {
  return (
    <div className="relative">
      <svg
        width="250"
        height="250"
        viewBox="0 0 45 45"
        xmlns="http://www.w3.org/2000/svg"
        stroke="#6809E1"
      >
        <g
          fill="none"
          fill-rule="evenodd"
          transform="translate(1 1)"
          stroke-width="2"
        >
          <circle cx="22" cy="22" r="6" stroke-opacity="0">
            <animate
              attributeName="r"
              begin="1.5s"
              dur="3s"
              values="6;22"
              calcMode="linear"
              repeatCount="indefinite"
            />
            <animate
              attributeName="stroke-opacity"
              begin="1.5s"
              dur="3s"
              values="1;0"
              calcMode="linear"
              repeatCount="indefinite"
            />
            <animate
              attributeName="stroke-width"
              begin="1.5s"
              dur="3s"
              values="2;0"
              calcMode="linear"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx="22" cy="22" r="6" stroke-opacity="0">
            <animate
              attributeName="r"
              begin="3s"
              dur="3s"
              values="6;22"
              calcMode="linear"
              repeatCount="indefinite"
            />
            <animate
              attributeName="stroke-opacity"
              begin="3s"
              dur="3s"
              values="1;0"
              calcMode="linear"
              repeatCount="indefinite"
            />
            <animate
              attributeName="stroke-width"
              begin="3s"
              dur="3s"
              values="2;0"
              calcMode="linear"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx="22" cy="22" r="8">
            <animate
              attributeName="r"
              begin="0s"
              dur="1.5s"
              values="6;1;2;3;4;5;6"
              calcMode="linear"
              repeatCount="indefinite"
            />
          </circle>
        </g>
      </svg>
    </div>
  );
}
export default Results;