import React, { useState } from "react";

//CSS
import styles from "./Login.module.css";

//Hooks
import { useEffect } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisible = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("clicou");
  };

  useEffect(() => {
    if (error) {
      setError(error);
    }
  }, [error]);

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
        </label>
        <button onClick={togglePasswordVisible}>
          {isPasswordVisible ? (
            <span>Mostrar senha</span>
          ) : (
            <span>Esconder senha</span>
          )}
        </button>

        <button className="btn">Entrar</button>

        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
};

export default Login;
