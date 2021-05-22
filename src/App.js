import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import MyPokedex from "./components/MyPokedex";
import PokeList from "./components/PokeList";
import Footer from "./components/Footer";

const COLORS = {
  Psychic: "#f8a5c2",
  Fighting: "#f0932b",
  Fairy: "#c44569",
  Normal: "#f6e58d",
  Grass: "#badc58",
  Metal: "#95afc0",
  Water: "#3dc1d3",
  Lightning: "#f9ca24",
  Darkness: "#574b90",
  Colorless: "#FFF",
  Fire: "#eb4d4b",
};

function App() {
  const [pokelist, setPokelist] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3030/api/cards").then((res) => {
      setPokelist(res.data.cards);
    });
  }, []);

  return (
    <div>
      <h1 className="header">My Pokedex</h1>
      {/* <MyPokedex /> */}
      <PokeList pokelist={pokelist} />
      <Footer />
    </div>
  );
}

export default App;
