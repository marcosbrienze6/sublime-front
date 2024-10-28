import React, { useState } from "react";
import Carousel from "../../components/Carousel";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import {
  DeviceMobile,
  Lamp,
  CarSimple,
  GameController,
  Basketball,
  TShirt,
} from "phosphor-react";
import useFetchData from "../../hooks/useFetchData";
import Products from "../../components/Products";

import image1 from "../../assets/PhoneIMG.png";

const Home = () => {
  // const { data: products, loading, error } = useFetchData();

  const [selectedFilter, setSelectedFilter] = useState("Mais buscados");
  const [selectedOption, setSelectedOption] = useState("Móveis");

  const images = [image1];

  const handleFilterClick = (filter) => {
    setSelectedFilter(filter);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

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
          <h3
            className={
              selectedFilter === "Mais buscados" ? styles.activeFilter : ""
            }
            onClick={() => handleFilterClick("Mais buscados")}
          >
            Mais buscados
          </h3>

          <h3
            className={selectedFilter === "Em alta" ? styles.activeFilter : ""}
            onClick={() => handleFilterClick("Em alta")}
          >
            Em alta
          </h3>

          <h3
            className={
              selectedFilter === "Mais recentes" ? styles.activeFilter : ""
            }
            onClick={() => handleFilterClick("Mais recentes")}
          >
            Mais recentes
          </h3>
        </div>
        <div className={styles.options}>
          <p
            className={selectedOption === "Móveis" ? styles.activeOption : ""}
            onClick={() => handleOptionClick("Móveis")}
          >
            Móveis
          </p>
          <p
            className={selectedOption === "Calçados" ? styles.activeOption : ""}
            onClick={() => handleOptionClick("Calçados")}
          >
            Calçados
          </p>
          <p
            className={selectedOption === "Carros" ? styles.activeOption : ""}
            onClick={() => handleOptionClick("Carros")}
          >
            Carros
          </p>
          <p
            className={
              selectedOption === "Celulares" ? styles.activeOption : ""
            }
            onClick={() => handleOptionClick("Celulares")}
          >
            Celulares
          </p>
        </div>
        <div className={styles.products_Container}>
          <Products />
          {/* {products &&
            products.map((product) => (
              <p key={product.id}>{product.name}</p>
            ))} */}
        </div>
      </div>
      <div className={styles.lowerSection}>
        <p>Eletrônicos e Celulares</p>
        <h1>Entretenimento e Trabalho</h1>
        <div className={styles.eletronicsOptions}>
          <div className={styles.eletronic}>
            <img src={image1} />
            <p>Celulares</p>
          </div>

          <div className={styles.eletronic}>
            <img src={image1} />
            <p>VideoGames</p>
          </div>

          <div className={styles.eletronic}>
            <img src={image1} />
            <p>Computadores</p>
          </div>

          <div className={styles.eletronic}>
            <img src={image1} />
            <p>Câmeras e Drones</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
