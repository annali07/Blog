export default function AboutComponent() {
  return (
    <div className="post" style={{height:'60vh'}}>
       <div className="singlepost-container">
      <div className="single-post"></div>
         <div className="title">About me</div>
        <div className="published-date">2023-10-10</div>
        <div className="body">
          Anna. A first year student at UofT.
        </div>
        <div className="line-breaking"></div>
        <div className="post-footer">
          <div className="tag">
            <div className="tag-input">About Me</div>
          </div>
          <div className="last-updated">
            Last Updated Today
          </div>
        </div>
    </div>
    </div>
    
  );
}
