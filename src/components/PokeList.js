import React, { useEffect, useState } from "react";
import axios from "axios";
import Cards from "./Cards";

function PokeList({ addCardtoPokedex }) {
  const [searchItem, setSearchItem] = useState("");
  const [pokelist, setPokelist] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3030/api/cards?limit=20&name=${searchItem}&type=${searchItem}`)
      .then((res) => setPokelist(res.data.cards));
  }, [searchItem]);

  return (
    <div className="poke-list">
      <input
        type="text"
        placeholder="Find pokemon"
        onChange={(e) => {
          setSearchItem(e.target.value);
        }}
      />
      <div className="poke-card-list">
        {pokelist.map((item) => (
          <Cards
            key={item.id}
            item={item}
            addCardtoPokedex={addCardtoPokedex}
          />
        ))}
      </div>
    </div>
  );
}

export default PokeList;
