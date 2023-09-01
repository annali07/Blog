// import React, { useState } from "react";
import Navbar from "./Navbar";
// import a from "../images/banner1.png";
// import b from "../images/banner2.png";
import c from "../images/m.jpeg"

export default function Header() {

  const headerStyle = {
    backgroundImage: `url(${c})`,
    height: "800px",
    flexShrink: 0,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div>
      <div style={headerStyle}>
        <Navbar color={"black"} />
      </div>
    </div>
  );
}
