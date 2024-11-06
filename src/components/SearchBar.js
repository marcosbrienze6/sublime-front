import React, { useState, useEffect } from "react";
// import "./SearchBar.css"; // Arquivo CSS para o estilo e animação

function SearchBar() {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className={`search-bar ${isFocused ? "expanded" : ""}`}>
      <input
        type="text"
        placeholder="Pesquisar..."
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </div>
  );
}

export default SearchBar;
