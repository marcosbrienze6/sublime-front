import React, { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

//Components
import Address from "../../components/Address";
import FormControl from "../../components/FormControl";

//CSS
import styles from "./Register.module.css";
import { Eye, EyeSlash } from "phosphor-react";

const Register = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");

  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");

  const [userCPF, setUserCPF] = useState("");
  const [userBirth, setUserBirth] = useState("");

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

      setTimeout(() => {
        setErrors("");
      }, 3000);
    }
  };

  //Valida o formulário
  const validateForm = () => {
    const newErrors = {};

    if (!name) {
      newErrors.name = "O nome é obrigatório.";
    }

    if (!lastName) {
      newErrors.lastName = "O sobrenome é obrigatório.";
    }

    if (userBirth.length === 0) {
      newErrors.userBirth = "Precisamos saber se você é de maior.";
    }

    switch (true) {
      case !phoneNumber:
        newErrors.phoneNumber = "O número de telefone é obrigatório.";
        break;
      case phoneNumber.length < 11:
        newErrors.phoneNumber = "Insira um número de telefone válido.";
    }

    switch (true) {
      case !userCPF:
        newErrors.userCPF = "O número de CPF é obrigatório";
        break;
      case userCPF.length < 12:
        newErrors.userCPF = "Insira um CPF válido.";
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
    if (errors.name) {
      setErrors({ ...errors, name: "" });
    }
  };

  //Reseta os erros se não tiver nenhum
  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
    if (errors.lastName) {
      setErrors({ ...errors, lastName: "" });
    }
  };

  //Reseta os erros se não tiver nenhum
  const handlePhoneChange = (e) => {
    setPhoneNumber(e.target.value);
    if (errors.phoneNumber) {
      setErrors({ ...errors, phoneNumber: "" });
    }
  };

  const handleCPFChange = (e) => {
    setUserCPF(e.target.value);
    if (errors.userCPF) {
      setErrors({ ...errors, userCPF: "" });
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
  const handleBirthChange = (e) => {
    setUserBirth(e.target.value);
    if (errors.userBirth) {
      setErrors({ ...errors, userBirth: "" });
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
      <h2>Cadastre-se agora mesmo!</h2>
      <p>Não dura nem 5 minutos...</p>
      <form className={styles.formContainer} onSubmit={handleSubmit}>
        <div className={styles.namesContainer}>
          <FormControl
            id="username"
            label="Nome"
            type="text"
            value={name}
            onChange={handleUsernameChange}
            error={errors.name}
          />

          <FormControl
            id="lastname"
            label="Sobrenome"
            type="text"
            value={lastName}
            onChange={handleLastNameChange}
            error={errors.lastName}
          />
        </div>
        <FormControl
          id="email"
          label="Email"
          type="text"
          value={email}
          onChange={handleEmailChange}
          error={errors.email}
        />
        <FormControl
          id="birth"
          label="Data de Nascimento"
          type="date"
          value={userBirth}
          onChange={handleBirthChange}
          error={errors.userBirth}
        />
        <FormControl
          id="phone"
          label="Celular"
          type="tel"
          value={phoneNumber}
          placeholder="Ex: (12) 12345-6789"
          pattern="[0-9]{11}"
          onChange={handlePhoneChange}
          error={errors.phoneNumber}
        />
        <FormControl
          id="CPF"
          label="CPF"
          type="text"
          value={userCPF}
          placeholder="Ex: 123.456.789-00"
          pattern="{12}"
          onChange={handleCPFChange}
          error={errors.userCPF}
        />
        CEP
        <Address />
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
                <Eye size={20} color="black" />
              ) : (
                <EyeSlash size={20} color="black" />
              )}
            </button>
          }
        />
        <div className={styles.photoContainer}>
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
        </div>
      </form>
    </div>
  );
};

export default Register;
