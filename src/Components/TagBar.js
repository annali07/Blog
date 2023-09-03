import Tag from "./Tag"

export default function TagBar(){
  return(
    <div className="tagbar">
      <div className="header">
        TAGS
      </div>
      <div className="body">
        <Tag/> <Tag/>
        <Tag/> <Tag/>
      </div>
    </div>
  )
}