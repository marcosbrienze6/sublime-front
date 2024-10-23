import React, { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

//CSS
import styles from "./Register.module.css";

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

    // let uploadedPhotoURL = photoURL;

    // if (imageFile) {
    //   const storageRef = ref(storage, `profileImages/${user.uid}`);
    //   await uploadBytes(storageRef, imageFile);
    //   uploadedPhotoURL = await getDownloadURL(storageRef);
    // }
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

  const handleImageURL = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setPhotoURL(URL.createObjectURL(file));
    }
  };

  const checkEmail = (email) => {
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

  const closeLabel = (e) => {
    e.preventDefault();
    setPhotoURL(false);
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
        {/* NOME */}
        <label>
          Nome:
          <input
            type="text"
            placeholder="Seu nome"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </label>
        {/* EMAIL */}
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
        {/* SENHA */}
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
        {/* CONFIRMAR SENHA */}
        <label>
          Confirmar Senha:
          <input
            type={isPasswordVisible ? "password" : "text"}
            placeholder="Confirme sua senha"
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {errors.confirmPassword && (
            <p className="error">{errors.confirmPassword}</p>
          )}
        </label>

        <button type="button" onClick={togglePasswordVisible}>
          {isPasswordVisible ? (
            <span>Mostrar senha</span>
          ) : (
            <span>Esconder senha</span>
          )}
        </button>

        {/* ADICIONAR FOTO */}
        {/* <input type="file" onChange={handleImageURL} accept="image/*" />

        {photoURL && (
          <div className={styles.user_image}>
            <span>Sua foto atual:</span>
            <img
              src={photoURL}
              alt="Selected"
              style={{ width: 150, height: 150, borderRadius: 500 }}
            />
          </div>
        )} */}
        {photoURL && (
          <>
            Quer adicionar uma foto?
            <input type="file" placeholder="Confirme sua senha" />
            <button className={styles.late_btn} onClick={closeLabel}>
              Adicionar depois
            </button>
          </>
        )}

        <button className="btn" type="submit">
          Cadastrar
        </button>
      </form>
    </div>
  );
};

export default Register;
