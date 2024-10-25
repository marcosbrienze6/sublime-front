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
} from "phosphor-react";

const Navbar = () => {
  const navigate = useNavigate();

  const [modalOpen, setModalOpen] = useState(false);

  const [searchQuery, setSearchQuery] = useState("");

  const handleModal = () => {
    setModalOpen(!modalOpen);
  };

  const goToProfile = () => {
    setModalOpen(false);
    navigate("/profile");
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
        <NavLink to="/vender" className={styles.navbarItem}>
          Vender
        </NavLink>

        <input
          className={styles.searchInpt}
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Pesquise por algo"
        />
        <button className={styles.botao} type="submit">
          <MagnifyingGlass size={30} color="black" />
        </button>

        <NavLink to={"/vender"}>
          <ShoppingBagOpen color="black" size={30} />
        </NavLink>

        <NavLink to={"/carrinho"}>
          <ShoppingCart size={30} />
        </NavLink>
        <NavLink to="/login" className={styles.navbarItemSign}>
          Entrar
        </NavLink>
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
            <NavLink to={"/profile"}>
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
