import timestamp from "../images/Timestamp.png"
import visit from "../images/VisitCount.png"
import comment from "../images/CommentCount.png"

import mockJson from '../json/posts.json'
export default function Post() {
  const jsonData = mockJson[0]

  function onClickHandler(){
    console.log("this is title")
  }
  
  const body = jsonData.body.substring(0, 250);
  
  return (
    <div className="post">
      <div className="titlebar">
        <div className="tagline"></div>
        <div className="tag">
        <button>{jsonData.majTag}</button>
        </div>
        <button onClick={onClickHandler} className="title">{jsonData.title}</button>
      </div>
      <div className="body">{body}...</div>
     <div className="data-wrapper">

     <div className="data">
        <img src={timestamp} style={{height:'1.2rem'}}alt=""/>
        <h2>{jsonData.date}</h2>
        <img src={visit} style={{height:'1.4rem'}}alt=""/>
        <h2>1 visits</h2>
        <img src={comment} style={{height:'1.4rem'}}alt=""/>
        <h2>1 comment</h2>
      </div>
     </div>
    </div>
  );
}
