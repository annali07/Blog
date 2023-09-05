import { useEffect } from "react";
import { useParams, useLocation, json } from "react-router-dom";
import Comment from "./Comment";

const SinglePost = (props) => {
  const { id } = useParams();
  const location = useLocation();

  const jsonData = location.state ? location.state.jsonData : null;
  useEffect(() => {
    props.onPostData(`Post  ${id}`);
  });
  const paragraphs = jsonData.body.split("\n");
  if (!jsonData) {
    return <div className="single-post">Data not found</div>;
  }

  return (
    <div className="singlepost-container">
      <div className="single-post">
        <div className="title">{jsonData.title}</div>
        <div className="published-date">{jsonData.date}</div>
        <div className="body">
          {paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
        <div className="line-breaking"></div>
        <div className="post-footer">
          <div className="tag">
            <div className="tag-input">{jsonData.majTag}</div>
          </div>
          <div className="last-updated">
            Last Updated {jsonData.lastUpdated}
          </div>
        </div>
      </div>
            <Comment/>
    </div>
  );
};

export default SinglePost;
