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
  FacebookLogo,
  TwitchLogo,
  InstagramLogo,
  YoutubeLogo,
  CurrencyDollarSimple,
  Chat,
  Heart,
  ArrowLineUpRight,
} from "phosphor-react";
import useFetchData from "../../hooks/useFetchData";
import Products from "../../components/Products";

import Footer from "../../components/Footer";

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
      <div className={styles.createAccount}>
        <h2>Crie sua conta na Sublime gratuitamente e aproveite 100%</h2>
        <div className={styles.spanOptions}>
          <p>Anuncie grátis e desapegue de produtos, autos sem pagar nada</p>
          <p>
            Negocie com compradores e vendedores através do chat e previna-se de
            golpes
          </p>
          <p>Favorite as ofertas que você mais curtiu</p>
          <p>Enviamos recomendações personalizadas para te ajudar</p>
        </div>
        <button>Crie sua conta gratuitamente</button>
      </div>
      <div className={styles.lowerSection}>
        {/* TECNOLOGIA */}
        <p>Eletrônicos e Celulares</p>
        <h2>Entretenimento e Trabalho</h2>
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

        {/* VEÍCULOS */}
        <p>Autos</p>
        <h2>Os melhores veículos</h2>
        <div className={styles.eletronicsOptions}>
          <div className={styles.eletronic}>
            <img src={image1} />
            <p>Carros</p>
          </div>

          <div className={styles.eletronic}>
            <img src={image1} />
            <p>Caminhões</p>
          </div>

          <div className={styles.eletronic}>
            <img src={image1} />
            <p>Motos</p>
          </div>

          <div className={styles.eletronic}>
            <img src={image1} />
            <p>Ônibus</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
