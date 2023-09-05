import { useEffect } from "react";
import { useParams, useLocation, json } from "react-router-dom";

const SinglePost = (props) => {
  const { id } = useParams();
  const location = useLocation();
  const jsonData = location.state ? location.state.jsonData : null;
  useEffect(()=>{
    props.onPostData(`Post  ${id}`)
  })

  if (!jsonData) {
    // Handle the case where jsonData is not available
    return <div className="single-post">Data not found</div>;
  }

  return (
    <div className="single-post">
     <div className="title">{jsonData.title}
     </div>
     <div className="published-date">{jsonData.date}</div>
     <div className="body">
      {jsonData.body}
     </div>
    </div>
  );
};

export default SinglePost;
