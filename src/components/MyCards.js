import React from "react";
import cute from "../cute.png";

function MyCards({ item, removeCardfromPokedex, index }) {
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
    <div className="my-card">
      <div className="grid-container-my-card">
        <div className="grid-item-my-pic">
          <img src={item.imageUrl} />
        </div>
        <div className="grid-item-my-name">{item.name}</div>
        <div className="grid-item-my-add">
          <button onClick={() => removeCardfromPokedex(index)}>X</button>
        </div>
        <div className="grid-item-my-label">HP</div>
        <div className="grid-item-my-scale">
          <div className="scale" style={{ width: calHp(item.hp) }}></div>
        </div>
        <div className="grid-item-my-label">STR</div>
        <div className="grid-item-my-scale">
          <div className="scale" style={{ width: calStr(item.attacks) }}></div>
        </div>
        <div className="grid-item-my-label">WEAK</div>
        <div className="grid-item-my-scale">
          <div className="scale" style={{ width: calWeak(item.weaknesses) }}></div>
        </div>
        <div></div>
        <div className="grid-item-my-cute">
          <img src={cute} />
          <img src={cute} />
          <img src={cute} />
        </div>
      </div>
    </div>
  );
}

export default MyCards;
