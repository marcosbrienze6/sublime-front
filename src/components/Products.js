// src/components/Products.js
import React from "react";

function Products({ product }) {
  return (
    <div style={styles.card}>
      {/* <img src={product.image} alt={product.name} style={styles.image} /> */}
      <h3 style={styles.title}>Produto</h3>
      <p style={styles.price}>$15.90</p>
    </div>
  );
}

const styles = {
  card: {
    width: "200px",
    padding: "16px",
    borderRadius: "8px",
    backgroundColor: "#fff",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    cursor: "pointer",
    // Efeito de ampliação ao passar o mouse
    ":hover": {
      transform: "scale(1.5)",
      boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
    },
  },
  image: {
    width: "100%",
    height: "150px",
    objectFit: "cover",
    borderRadius: "4px",
  },
  title: {
    fontSize: "1.1rem",
    margin: "8px 0",
    fontWeight: "bold",
  },
  price: {
    color: "#888",
    fontSize: "1rem",
  },
};

export default Products;
