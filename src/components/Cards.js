import React from "react";
import cute from '../cute.png'

function Cards() {
  return (
    <div className="cards">
        <div className="grid-container-card">
            <div className="grid-item-pic">
              <img src="" alt="Pokemon" />
            </div>
            <div className="grid-item-name">Name</div>
            <div className="grid-item-add"><button>Add</button></div>
            <div className="grid-item-label">HP</div>
            <div className="grid-item-scale"></div>
            <div className="grid-item-label">STR</div>
            <div className="grid-item-scale"></div>
            <div className="grid-item-label">WEAK</div>
            <div className="grid-item-scale"></div>
            <div></div>
            <div className="grid-item-cute"><img src={cute}/></div>
        </div>
    </div>
  );
}

export default Cards;
