import React from "react";
import Cards from './Cards'

function PokeList() {
  return (
    <div className="poke-list">
      <input type="text" />
      <div className="poke-card-list">
          <Cards/>
          <Cards/>
          <Cards/>
          <Cards/>
          <Cards/>
      </div>
    </div>
  );
}

export default PokeList;
