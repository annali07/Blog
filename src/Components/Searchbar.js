import { useRef, useState} from "react";

export default function Searchbar() {
  const inputRef = useRef();
  const [query, setQuery] = useState([])

  function searchHandler(e) {
    e.preventDefault();
    const value = inputRef.current.value
    if (value === "") return;
    setQuery(value);
    inputRef.current.value = "";
    console.log(value)
  }

  // const filteredItems = items.filter(item=> {
  //   return item.toLowerCase().includes(query.toLowerCase())
  // })



  return (
    <div className="searchbar">
      <input
        ref={inputRef}
        type="text"
        placeholder="type something..."
      ></input>
      <button onClick={searchHandler}>SEARCH</button>
    </div>
  );
}
