import React from "react";

import styles from "./Footer.module.css";

import {
  FacebookLogo,
  TwitterLogo,
  InstagramLogo,
  YoutubeLogo,
} from "phosphor-react";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className={styles.footerSection}>
        <div className={styles.footerContent}>
          <div className={styles.footerPtOne}>
            <h3>Fique por dentro das novidades</h3>
            <p>Inscreva-se para saber em primeira mão</p>
            <input type="email" placeholder="Digite seu email" />
            <button>Inscrever</button>
          </div>
          <div className={styles.footerPtTwo}>
            <h3>Formas de Contato</h3>
            <p>(99) 99999-9999</p>
            <p>marcos@teste.com</p>
          </div>
          <div className={styles.footerPtThree}>
            <h3>Você pode estar procurando por</h3>
            <div className={styles.itemsContainer}>
              <Link className={styles.items}>
                <p>Projetos</p>
              </Link>
              <Link className={styles.items}>
                <p>Imóveis</p>
              </Link>
              <Link className={styles.items}>
                <p>Vendas</p>
              </Link>
              <Link className={styles.items}>
                <p>Contratar</p>
              </Link>
              <Link className={styles.items}>
                <p>Participe</p>
              </Link>
              <Link className={styles.items}>
                <p>Contato</p>
              </Link>
            </div>
          </div>
          <div className={styles.footerPtFour}>
            <div className={styles.socialMedia}>
              <p>
                <a href="https://www.facebook.com">
                  <FacebookLogo color="white" size={35} />
                </a>
              </p>
              <p>
                <a href="https://www.instagram.com">
                  <InstagramLogo color="white" size={35} />
                </a>
              </p>
              <p>
                <a href="https://www..com">
                  <TwitterLogo color="white" size={35} />
                </a>
              </p>
              <p>
                <a href="https://www.youtube.com">
                  <YoutubeLogo color="white" size={35} />
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
