import React, { useState, useEffect } from "react";
//Hooks
import { useNavigate } from "react-router-dom";

//CSS
import styles from "./Login.module.css";
import { Eye, EyeSlash } from "phosphor-react";
import FormControl from "../../components/FormControl";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [isPasswordVisible, setPasswordVisible] = useState(true);

  const navigate = useNavigate();

  //Muda o estado da senha
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
      setErrors(newErrors);
    }
  };
  //Válidação do formulário
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
      case password.length < 8:
        newErrors.password = "A senha precisa de no mínimo 8 caracteres.";
    }

    return newErrors;
  };
  //Checa se o email digitado é válido
  const checkEmail = (email) => {
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };
  //Reseta os erros se não tiver nenhum
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (errors.email) {
      setErrors({ ...errors, email: "" });
    }
  };
  //Reseta os erros se não tiver nenhum
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (errors.password) {
      setErrors({ ...errors, password: "" });
    }
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
        <FormControl
          id="email"
          label="Email"
          type="text"
          value={email}
          onChange={handleEmailChange}
          error={errors.email}
        />
        <FormControl
          id="password"
          label="Senha"
          type={isPasswordVisible ? "text" : "password"}
          value={password}
          onChange={handlePasswordChange}
          error={errors.password}
          button={
            <button
              type="button"
              onClick={togglePasswordVisible}
              className={styles.passwordToggle}
            >
              {isPasswordVisible ? (
                <Eye color="black" />
              ) : (
                <EyeSlash color="black" />
              )}
            </button>
          }
        />

        <button className={styles.btn} type="submit">
          Entrar
        </button>
      </form>
    </div>
  );
};

export default Login;
