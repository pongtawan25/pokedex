import React from "react";
import MyCards from "./MyCards";

function MyPokedex({ myPokedex, removeCardfromPokedex }) {
  return (
    <div className="my-pokedex">
      {myPokedex.map((item, index) => (
        <MyCards key={item.id} item={item} removeCardfromPokedex={removeCardfromPokedex} index={index} />
      ))}
    </div>
  );
}

export default MyPokedex;
