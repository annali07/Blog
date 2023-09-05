import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import { useState } from "react";
import tagsData from "../json/tags.json";

const Navbar = ({ head }) => {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const tags = tagsData.tags;

  const dropdownMenuAnimation = {
    animationName: "downOut",
    animationDuration: "500ms",
    animationTimingFunction: "ease-in-out",

    // animationFillMode: "forwards",
  };

  function onPress() {
    head("Home");
  }
  function onPress2() {
    head("About");
  }
  function onPress3() {
    head("Journals");
  }
  function onPress4() {
    head("Books");
  }

  return (
    <header>
      <div className="container">
        <div className="container1">
          <Link to="/" style={{ color: "black" }} onClick={onPress}>
            <h1 className={styles.mainmenu}>Nana♡Blog</h1>
          </Link>
        </div>

        <div className="container2">
          <Link to="/" style={{ color: "black" }} onClick={onPress}>
            <h1 className={styles.navmenu}>Home</h1>
          </Link>

          <div
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
            className={`dropdown ${open ? "open" : ""}`}
          >
            <Link style={{ color: "black" }} className="navmenu">
              <h1 className={styles.navmenu}>
                Codes<span className="drop-down">▽</span>
              </h1>
            </Link>
            <div
              className={`menu ${open ? "open" : ""}`}
              style={open ? dropdownMenuAnimation : {}}
            >
              {tags.map((tag, index) => (
                <button key={index}>{tag.topic}</button>
              ))}
            </div>
            <style>
              {`
              @keyframes downOut {
                0% {
                  transform: translateZ(100px)
                  translateX(-7px)  translateY(-10px);
                }
                70% {
                  transform: translateZ(-10px) 
                  translateX(-7px)translateY(0px);
                }
                100% {
                  transform: translateZ(0px) 
                  translateX(-7px)translateY(0px);
                }
              }
            `}
            </style>
          </div>

          <div
            onMouseEnter={() => setOpen2(true)}
            onMouseLeave={() => setOpen2(false)}
            className={`dropdown ${open2 ? "open2" : ""}`}
          >
            <Link style={{ color: "black" }} className="navmenu">
              <h1 className={styles.navmenu}>
                Shelf<span className="drop-down">▽</span>
              </h1>
            </Link>
            <div
              className={`menu ${open2 ? "open2" : ""}`}
              style={open2 ? dropdownMenuAnimation : {}}
            >
              <button className="button" onClick={onPress3}>
                Journals
              </button>
              <button onClick={onPress4}>Books</button>
            </div>
            <style>
              {`
              @keyframes downOut {
            0% {
              transform: translateZ(200px) translateY(-10px);
            }
            70% {
              transform: translateZ(-10px) translateY(0px);
            }
            100% {
              transform: translateZ(0px) translateY(0px);
            }
          }
        `}
            </style>
          </div>

          <Link to="/about" style={{ color: "black" }} onClick={onPress2}>
            <h1 className={styles.navmenu}>About</h1>
          </Link>
          <Link style={{ color: "black" }}>
            <h1 id="jp" className={styles.navmenu2}>
              素晴らしき日々
            </h1>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
