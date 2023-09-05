import { useParams, useLocation, json } from "react-router-dom";

const SinglePost = () => {
  const { id } = useParams();
  const location = useLocation();
  const jsonData = location.state ? location.state.jsonData : null;

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
