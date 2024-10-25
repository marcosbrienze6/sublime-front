import React from "react";

import Carousel from "../../components/Carousel";

import { Link } from "react-router-dom";

import {
  DeviceMobile,
  Lamp,
  CarSimple,
  GameController,
  Basketball,
  TShirt,
} from "phosphor-react";
const Home = () => {
  return (
    <div>
      <Carousel />
      <div className="container">
        <h2 className="celular">
          <DeviceMobile size={50} />
          <span>Celular</span>
        </h2>

        <h2 className="celular">
          <Lamp size={50} />
          <span>Itens</span>
        </h2>

        <h2 className="celular">
          <CarSimple size={50} />
          <span>Auto</span>
        </h2>

        <h2 className="celular">
          <GameController size={50} />
          <span>Eletro</span>
        </h2>

        <h2 className="celular">
          <Basketball size={50} />
          <span>Esportes</span>
        </h2>

        <h2 className="celular">
          <TShirt size={50} />
          <span>Moda</span>
        </h2>
      </div>
    </div>
  );
};

export default Home;
