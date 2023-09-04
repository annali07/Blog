import React, { useEffect, useState } from "react";
import Tag from "./Tag"
import tagsData from "../json/tags.json";


export default function TagBar(){
  
  const [tags, setTags] = useState([]);

  useEffect(() => {
    setTags(tagsData.tags);
  }, []);
  
  return(
    <div className="tagbar">
      <div className="header">
        TAGS
      </div>
      <div className="body">
      {tags.map((tag, index) => (
          <Tag key={index} topic={tag.topic} frequency={tag.frequency} />
        ))}
      </div>
    </div>
  )
}