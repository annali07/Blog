import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import { useState } from "react";

const Navbar = (props) => {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);

  const dropdownMenuAnimation = {
    animationName: "downOut",
    animationDuration: "500ms",
    animationTimingFunction: "ease-in-out",
    // animationFillMode: "forwards",
  };

  
  function onPress(){
    props.head("Home")
  }
  function onPress2(){
    props.head("About")
  }
  function onPress3(){
    props.head("Journals")
  }
  function onPress4(){
    props.head("Books")
  }


  return (
    <header>
      <div className="container">

        <div className="container1">
          <Link to="/" style={{ color: props.color }} onClick={onPress}>
            <h1 className={styles.mainmenu}>Nana♡Blog</h1>
          </Link>
        </div>

        <div className="container2">
          <Link to="/" style={{ color: props.color }} onClick={onPress}>
            <h1 className={styles.navmenu}>Home</h1>
          </Link>

          <div
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
            className={`dropdown ${open ? "open" : ""}`}
          >
            <Link style={{ color: props.color }} className="navmenu">
              <h1 className={styles.navmenu}>
                Codes<span className="drop-down">▽</span>
              </h1>
            </Link>
            <div
              className={`menu ${open ? "open" : ""}`}
              style={open ? dropdownMenuAnimation : {}}
            >
              <button>Menu 1</button>
              <button>Menu 2</button>
            </div>
            <style>
            {`
              @keyframes downOut {
                0% {
                  transform: translateZ(100px) translateY(-10px);
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

          <div
            onMouseEnter={() => setOpen2(true)}
            onMouseLeave={() => setOpen2(false)}
            className={`dropdown ${open2 ? "open2" : ""}`}
          >
            <Link style={{ color: props.color }} className="navmenu">
              <h1 className={styles.navmenu}>
                Shelf<span className="drop-down">▽</span>
              </h1>
            </Link>
            <div
              className={`menu ${open2 ? "open2" : ""}`}
              style={open2 ? dropdownMenuAnimation : {}}
            >
              <button className="button"  onClick={onPress3}>Journals</button>
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

          <Link to="/about" style={{ color: props.color }} onClick={onPress2}>
            <h1 className={styles.navmenu}>About</h1>
          </Link>
          <Link style={{ color: props.color }}>
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
