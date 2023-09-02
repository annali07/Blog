import timestamp from "../images/Timestamp.png"
import visit from "../images/VisitCount.png"
import comment from "../images/CommentCount.png"
import {Button} from 'react'

export default function Post() {

  function onClickHandler(){
    console.log("this is title")
  }


  return (
    <div className="post">
      <div className="titlebar">
        <div className="tagline"></div>
        <div className="tag">
          <button>C++</button>
        </div>
        <button onClick={onClickHandler} className="title">How to Implement the Recursive Function</button>
      </div>
      <div className="body">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in </div>
      <div className="data">
        <img src={timestamp} style={{height:'1.2rem'}}alt=""/>
        <h2>2023-09-21</h2>
        <img src={visit} style={{height:'1.4rem'}}alt=""/>
        <h2>1 visits</h2>
        <img src={comment} style={{height:'1.4rem'}}alt=""/>
        <h2>1 comment</h2>
      </div>
    </div>
  );
}
