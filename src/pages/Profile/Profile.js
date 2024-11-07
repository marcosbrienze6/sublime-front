import React from "react";
import styles from "./Profile.module.css";
import profileImage from "../../assets/felipaocarecasso.png";

const Profile = () => {
  const images = [profileImage];

  return (
    <div className="profile-container">
      <div className={styles.photoContainer}>
        <h1>Felipenis da Silva</h1>
        <img src={images} width={200} height={200} />
        <ul>
          <p>AGE:</p>
          <p>GENDER:</p>
          <p>STATUS:</p>
          <p>EDUCATION:</p>
          <p>LOCATION:</p>
          <p>OCCUPATION:</p>
        </ul>
      </div>
      <div className={styles.usersInfo}>
        <div className="spanBox">
          <h2>Biography</h2>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using
          </p>
        </div>

        <div className="spanBox">
          <h2>Objetivos</h2>
          <ul>
            <li>
              It is a long established fact that a reader will be distracted
            </li>
            <li>of using Lorem Ipsum is that it has a more-or-less</li>
            <li>The point of using Lorem Ipsum is that</li>
          </ul>
        </div>
      </div>
      <div className={styles.usersGraph}>
        <div className="spanBox">
          <h2>Principais produtos</h2>
          <ul>
            <li>Camisas Estampadas</li>
            <li>Peças de Carro</li>
            <li>Entregar game de Mordekaiser</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Profile;
