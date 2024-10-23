import React, { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

//CSS
import styles from "./Login.module.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [isPasswordVisible, setPasswordVisible] = useState(true);

  const navigate = useNavigate();

  const togglePasswordVisible = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length === 0) {
      console.log("O formulário está 100% válido!");
      setErrors("");
      setEmail("");
      setPassword("");

      navigate("/");

      console.log(email, password);
    } else {
      setErrors(newErrors); // Alterado para setErrors
    }
  };

  const validateForm = () => {
    const newErrors = {};

    switch (true) {
      case !email:
        newErrors.email = "O email é obrigatório.";
        break;
      case !checkEmail(email):
        newErrors.email = "Insira um email válido.";
    }

    switch (true) {
      case !password:
        newErrors.password = "A senha é obrigatória.";
        break;
      case password.length < 7:
        newErrors.password = "A senha precisa de no mínimo 7 caracteres.";
    }

    return newErrors;
  };

  const checkEmail = (email) => {
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

  useEffect(() => {
    if (errors) {
      setErrors(errors);
    }
  }, [errors]);

  return (
    <div className={styles.login}>
      <h2>Entre na sua conta</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="text"
            placeholder="Seu email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </label>

        <label>
          Senha:
          <input
            type={isPasswordVisible ? "password" : "text"}
            placeholder="Sua senha"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <p className="error">{errors.password}</p>}
        </label>

        <button type="button" onClick={togglePasswordVisible}>
          {isPasswordVisible ? (
            <span>Mostrar senha</span>
          ) : (
            <span>Esconder senha</span>
          )}
        </button>

        <button className="btn" type="submit">
          Entrar
        </button>
      </form>
    </div>
  );
};

export default Login;
