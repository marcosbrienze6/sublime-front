import React, { useState } from "react";

import styles from "./Navbar.module.css";

import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Bell, Bag, UserCircle, Gear, SignOut } from "phosphor-react";

const Navbar = () => {
  const navigate = useNavigate();

  const [modalOpen, setModalOpen] = useState(false);

  const handleModal = () => {
    setModalOpen(!modalOpen);
  };

  const goToProfile = () => {
    setModalOpen(false);
    navigate("/profile");
  };

  return (
    <div className={styles.navbar}>
      <h1>Sublime</h1>
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/login"}>Login</NavLink>
      <NavLink to={"/register"}>Register</NavLink>
      <NavLink>
        <button onClick={handleModal}>Eu{modalOpen ? "" : ""}</button>

        {modalOpen && (
          <div className={styles.modal}>
            <div className={styles.modalContent}>
              <h2>Eai dog</h2>
              <NavLink to={"/profile"}>
                <button onClick={goToProfile}>
                  <UserCircle color="orange" /> Ver meu perfil
                </button>
                <button onClick={goToProfile}>
                  <Bell color="orange" /> Mensagens
                </button>
                <button onClick={goToProfile}>
                  <Bag color="orange" /> Minhas compras
                </button>
                <button onClick={goToProfile}>
                  <Gear color="orange" /> Configurações
                </button>
                <button onClick={goToProfile}>
                  <SignOut color="orange" /> Sair
                </button>
              </NavLink>
            </div>
          </div>
        )}
      </NavLink>
    </div>
  );
};

export default Navbar;
