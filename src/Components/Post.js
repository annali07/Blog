import timestamp from "../images/Timestamp.png"
import visit from "../images/VisitCount.png"
import comment from "../images/CommentCount.png"
import mockJson from '../json/posts.json'
import { Link } from "react-router-dom"

export default function Post({id}) {
  const jsonData = mockJson[0]
  const body = jsonData.body.substring(0, 250);
  
  return (
    <div className="post" >
      
      <div className="titlebar">
        <div className="tagline"></div>
        <div className="tag">
        <button>{jsonData.majTag}</button>
        </div>
        <Link className="title" to={`/posts/${id}`} state={{ jsonData }}>
          {console.log({jsonData})}
        <p>{jsonData.title}</p>
      </Link>
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
