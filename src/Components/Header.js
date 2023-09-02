// import React, { useState } from "react";
import Navbar from "./Navbar";
// import a from "../images/banner1.png";
// import b from "../images/banner2.png";
import c from "../images/m.jpeg"

export default function Header({ f }) {

  const headerStyle = {
    backgroundImage: `url(${c})`,
    height: "40rem",
    flexShrink: 0,
    backgroundSize: "cover",
    backgroundPosition: "center",

    
  };

  return (
    <div>
      <div style={headerStyle}>
        <Navbar head={f} color={"black"} />
      </div>
    </div>
  );
}
