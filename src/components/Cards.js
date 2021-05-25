import React from "react";
import cute from "../cute.png";

function Cards({ item, addCardtoPokedex }) {
  let HP = 0;
  let DM = 0;
  let WK = 0;

  const calHp = (hp) => {
    if (hp) {
      if (hp == "None") {
        HP = 0;
        return "0%";
      } else if (hp > 100) {
        HP = 100;
        return "100%";
      } else {
        HP = hp;
        return `${hp}%`;
      }
    } else {
      HP = 0;
      return "0%";
    }
  };

  const calStr = (atk) => {
    if (atk) {
      if (atk.length == 1) {
        DM = 50;
        return "50%";
      } else if (atk.length == 2) {
        DM = 100;
        return "100%";
      }
    } else {
      DM = 0;
      return "0%";
    }
  };

  const calWeak = (weak) => {
    if (weak) {
      if (weak.length == 1) {
        WK = 100;
        return "100%";
      } else {
        WK = 0;
        return "0%";
      }
    } else {
      WK = 0;
      return "0%";
    }
  };

  const calHappiness = () => {

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
