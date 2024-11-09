import React, { useState } from "react";

import styles from "./Navbar.module.css";

import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  MagnifyingGlass,
  ShoppingBagOpen,
  ShoppingCart,
  Gear,
  SignOut,
  UserCircle,
  Bell,
  Bag,
  Money,
} from "phosphor-react";
import Login from "./Login";

import image from "../assets/felipaocarecasso.png";
import SearchBar from "./SearchBar";

const Navbar = () => {
  const navigate = useNavigate();

  const [modalOpen, setModalOpen] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);

  const [searchQuery, setSearchQuery] = useState("");

  const images = [image];

  const handleModal = () => {
    setModalOpen(!modalOpen);
  };

  const goToProfile = () => {
    setModalOpen(false);

    navigate("/profile");
  };

  const handleLoginModal = () => {
    setLoginModalOpen(!loginModalOpen);
  };

  const closeModal = () => {
    setLoginModalOpen(false);
  };

  return (
    <div className={styles.navbar}>
      <div className={styles.navbar}>
        <h1 className={styles.navbarItem}>
          Sublime <span>Ⓡ</span>
        </h1>
        <NavLink to="/" className={styles.navbarItem}>
          Home
        </NavLink>
        <NavLink to="/shop" className={styles.navbarItem}>
          Shop
        </NavLink>
        <NavLink to="/store" className={styles.navbarItem}>
          Vender
        </NavLink>

        <SearchBar />

        <NavLink to={"/store"}>
          <ShoppingBagOpen color="black" size={30} />
        </NavLink>

        <NavLink to={"/carrinho"}>
          <ShoppingCart size={30} />
        </NavLink>

        <button onClick={handleLoginModal} className={styles.loginBtn}>
          Entrar{loginModalOpen ? "" : ""}
        </button>

        {loginModalOpen && (
          <>
            <div
              className={`${styles.modalBackdrop} ${
                loginModalOpen ? styles.openBackdrop : ""
              }`}
              onClick={handleLoginModal}
            />
            <div
              className={`${styles.loginModal} ${
                loginModalOpen ? styles.openLogin : ""
              }`}
            >
              <img width={350} height={500} src={image} />
              <Login closeModal={closeModal} />
            </div>
          </>
        )}

        <NavLink to="/register" className={styles.navbarItem}>
          Registrar
        </NavLink>
      </div>
      <NavLink>
        <button className={styles.options} onClick={handleModal}>
          Eu{modalOpen ? "" : ""}
        </button>

        <div className={`${styles.modal} ${modalOpen ? styles.open : ""}`}>
          <div className={styles.modalContent}>
            <h2>Eai dog</h2>
            <NavLink to="/profile">
              <button>
                <UserCircle /> Ver meu perfil
              </button>
              <button>
                <Bell /> Mensagens
              </button>
              <button>
                <Bag /> Minhas compras
              </button>
              <button>
                <Money /> Minha loja
              </button>
              <button>
                <Gear /> Configurações
              </button>
              <button>
                <SignOut /> Sair
              </button>
            </NavLink>
          </div>
        </div>
      </NavLink>
    </div>
  );
};

export default Navbar;
