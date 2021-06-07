import React from "react";

import "../styles/components/main-search.scss";

const MainSearch = () => {
  return (
    <div className="main-search">
      <h2>Busca lo que necesitas</h2>
      <div className="search-autocomplete">
        <input type="search" />
      </div>

      <p>
        <span>#ssd</span>
        <span>#pantalon</span>
        <span>#audifonos</span>
      </p>
    </div>
  );
};

export default MainSearch;
