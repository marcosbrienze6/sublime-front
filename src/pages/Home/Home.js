import React from "react";

import Carousel from "../../components/Carousel";

//Router
import { Link } from "react-router-dom";

//CSS
import styles from "./Home.module.css";

//Icons
import {
  DeviceMobile,
  Lamp,
  CarSimple,
  GameController,
  Basketball,
  TShirt,
} from "phosphor-react";

//Hooks
import useFetchData from "../../hooks/useFetchData";
import Products from "../../components/Products";

const Home = () => {
  // const { data: products, loading, error } = useFetchData();

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
      <div className={styles.midSection}>
        <h1>Dê uma olhada no que está em alta</h1>
        <div className={styles.filters}>
          <h3>Mais buscados</h3>
          <h3>Em alta</h3>
          <h3>Mais recentes</h3>
        </div>
        <div className={styles.options}>
          <p>Móveis</p>
          <p>Calçados</p>
          <p>Carros</p>
          <p>Celulares</p>
        </div>
        <div className={styles.products_Container}>
          <Products />
          {/* {products &&
            products.map((product) => (
              <>
                <p>{product.name}</p>
              </>
            ))} */}
        </div>
      </div>
    </div>
  );
};

export default Home;
