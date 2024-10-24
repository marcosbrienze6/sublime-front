import React, { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

//CSS
import styles from "./Register.module.css";
import { Eye, EyeSlash } from "phosphor-react";
import FormControl from "../../components/FormControl";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [photoURL, setPhotoURL] = useState(true);

  const [errors, setErrors] = useState({});
  const [isPasswordVisible, setPasswordVisible] = useState(true);

  const navigate = useNavigate();

  const togglePasswordVisible = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length === 0) {
      console.log("O formulário está 100% válido!");
      setErrors("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");

      navigate("/");

      console.log(email, password);
    } else {
      setErrors(newErrors);
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!name) {
      newErrors.name = "O nome é obrigatório.";
    }

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

    switch (true) {
      case password != confirmPassword:
        newErrors.confirmPassword = "As senhas não se coincidem.";
        break;
      case password.length < 7:
        newErrors.password = "A senha precisa de no mínimo 7 caracteres.";
    }

    return newErrors;
  };

  //Checa se o email digitado é válido
  const checkEmail = (email) => {
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

  const closeLabel = (e) => {
    e.preventDefault();
    setPhotoURL(false);
  };

  //Reseta os erros se não tiver nenhum
  const handleUsernameChange = (e) => {
    setName(e.target.value);
    if (errors.username) {
      setErrors({ ...errors, username: "" });
    }
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
  //Reseta os erros se não tiver nenhum
  const handlePasswordConfirmationChange = (e) => {
    setConfirmPassword(e.target.value);
    if (errors.confirmPassword) {
      setErrors({ ...errors, confirmPassword: "" });
    }
  };

  useEffect(() => {
    if (errors) {
      setErrors(errors);
    }
  }, [errors]);

  return (
    <div className={styles.register}>
      <h2>Entre na sua conta</h2>
      <form onSubmit={handleSubmit}>
        <FormControl
          id="username"
          label="Nome de usuário"
          type="text"
          value={name}
          onChange={handleUsernameChange}
          error={errors.name}
        />
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
        />
        <FormControl
          id="password-confirmation"
          label="Confirmação de senha"
          type={isPasswordVisible ? "text" : "password"}
          value={confirmPassword}
          onChange={handlePasswordConfirmationChange}
          error={errors.confirmPassword}
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

        {photoURL && (
          <>
            Quer adicionar uma foto?
            <input type="file" placeholder="Confirme sua senha" />
            <button className={styles.late_btn} onClick={closeLabel}>
              Adicionar depois
            </button>
          </>
        )}

        <button className={styles.btn} type="submit">
          Cadastrar
        </button>
      </form>
    </div>
  );
};

export default Register;
