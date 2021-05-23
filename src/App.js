import React, { useState, useEffect } from "react";
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
  const [myPokedex, setMyPokedex] = useState([]);
  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal(true);
  };

  const addCardtoPokedex = (card) => {
    setMyPokedex([...myPokedex, card]);
  };

  const removeCardfromPokedex = (index) => {
    var arr = [...myPokedex];
    if (index !== -1) {
      arr.splice(index, 1);
      setMyPokedex([...arr]);
    }
  };

  const Modal = () => (
    <div className="modal" style={{ display: modal ? "block" : "none" }}>
      <PokeList addCardtoPokedex={addCardtoPokedex} />
      <button className="close-list" onClick={() => setModal(false)}>
        Close
      </button>
    </div>
  );

  return (
    <div>
      <h1 className="header">My Pokedex</h1>
      <MyPokedex myPokedex={myPokedex} removeCardfromPokedex={removeCardfromPokedex} />
      <Modal />
      <Footer openModal={openModal} />
    </div>
  );
}

export default App;
