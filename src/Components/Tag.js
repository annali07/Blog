export default function Tag(props){
  function tagHandler(){
    console.log("clicked")
  }

  return(
    <button onClick={tagHandler}className="tagbar-tag">
    <p>{props.tag}</p>
    <p id="num">/ {1} </p>
    </button>
  )
}