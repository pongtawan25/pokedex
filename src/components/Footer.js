import React from "react";

function Footer({ openModal }) {
  return (
    <div className="footer">
      <button className="open-list" onClick={openModal}>
        +
      </button>
    </div>
  );
}

export default Footer;
