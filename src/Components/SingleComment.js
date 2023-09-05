export default function SingleComment({ username, commentedDate, body }){
  return (
    <div className="single-comment">
      <div className="comment-header">
        <p className="username">{username}</p>
        <p className="commented-date">{commentedDate}</p>
      </div>
      <div className="comment-body">{body}</div>
    </div>
  );
}