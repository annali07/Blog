export default function Tag(props){
  function tagHandler(){
    console.log("clicked")
  }

  return(
    <button onClick={tagHandler}className="tagbar-tag">
    <p>{props.topic}</p>
    <p id="num">/ {props.frequency} </p>
    </button>
  )
}