import comment from "../images/CommentCount.png";
import commentsData from '../json/comments.json'
import SingleComment from "./SingleComment";

export default function Comment(){
  return(
    <div className="comment">
    <div className="data">
      <img src={comment} style={{ height: "1.4rem" }} alt="" />
      <h2>2 Comments</h2>
    </div>
    <div className="line-breaking"></div>
    {commentsData.comments.map((comment, index) => (
        <SingleComment
          key={index}
          username={comment.username}
          commentedDate={comment.commentedDate}
          body={comment.body}
        />
      ))}
  </div>
  )
}