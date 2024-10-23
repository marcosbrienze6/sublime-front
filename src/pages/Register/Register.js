//CSS
import styles from "./Register.module.css";
//Router
import { Link } from "react-router-dom";
//Hooks
import { useEffect, useState } from "react";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [photoURLabel, setPhotoURLLabel] = useState(true);

  const [displayName, setDisplayName] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    const user = {
      displayName,
      email,
      password,
      // photoURL,
    };

    if (password !== confirmpassword) {
      setError("As senhas não se coincidem");
      return;
    }

    setDisplayName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  useEffect(() => {
    if (error) {
      setError(error);
    }
  }, [error]);

  const closeLabel = (e) => {
    e.preventDefault();
    setPhotoURLLabel(false);
  };

  return (
    <div className={styles.register}>
      <h2>Crie sua conta</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nome:
          <input
            type="text"
            required
            placeholder="Seu nome"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
          />
        </label>

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
            type="password"
            placeholder="Sua senha"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        <label>
          Confirme sua senha:
          <input
            type="password"
            placeholder="Confirme sua senha"
            required
            value={confirmpassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </label>

        <label>
          {photoURLabel && (
            <>
              Quer adicionar uma foto?
              <input type="file" placeholder="Confirme sua senha" />
              <button className={styles.late_btn} onClick={closeLabel}>
                Adicionar depois
              </button>
            </>
          )}
        </label>

        <p>
          Já tem uma conta? <Link to={"/login"}>Entrar</Link>
        </p>
        <button className="btn">Cadastrar</button>

        {error && <p className="error">{error}</p>}
        {/* {check && <p className="check">{check}</p>} */}
      </form>
    </div>
  );
};

export default Register;
