import React from "react";
import cute from "../cute.png";

function Cards({ item, addCardtoPokedex }) {
  const calHp = (hp) => {
    if (hp == "None") {
      return "0%";
    } else if (hp > 100) {
      return "100%";
    } else {
      return `${hp}%`;
    }
  };

  const calStr = (atk) => {
    try {
      let count = 0;
      atk.forEach((e) => {
        count++;
      });
      if (count == 1) {
        return "50%";
      } else if (count == 2) {
        return "100%";
      } else {
        return "0%";
      }
    } catch (error) {}
  };

  const calWeak = (weak) => {
    try {
      let count = 0;
      weak.forEach((e) => {
        count++;
      });
      if (count == 1) {
        return "100%";
      } else {
        return "0%";
      }
    } catch (error) {}
  };

  return (
    <div className="cards">
      <div className="grid-container-card">
        <div className="grid-item-pic">
          <img src={item.imageUrl} />
        </div>
        <div className="grid-item-name">{item.name}</div>
        <div className="grid-item-add">
          <button onClick={() => addCardtoPokedex(item)}>Add</button>
        </div>
        <div className="grid-item-label">HP</div>
        <div className="grid-item-scale">
          <div className="scale" style={{ width: calHp(item.hp) }}></div>
        </div>
        <div className="grid-item-label">STR</div>
        <div className="grid-item-scale">
          <div className="scale" style={{ width: calStr(item.attacks) }}></div>
        </div>
        <div className="grid-item-label">WEAK</div>
        <div className="grid-item-scale">
          <div
            className="scale"
            style={{ width: calWeak(item.weaknesses) }}
          ></div>
        </div>
        <div></div>
        <div className="grid-item-cute">
          <img src={cute} />
          <img src={cute} />
          <img src={cute} />
        </div>
      </div>
    </div>
  );
}

export default Cards;
