import { useRef, useState, useEffect } from "react";

export default function Searchbar({f}) {
  const inputRef = useRef();
  const [query, setQuery] = useState("");

  function searchHandler(e) {
    e.preventDefault();
    const value = inputRef.current.value;
    fetchData(value);
    inputRef.current.value = "";
  }

  const fetchData = (value) => {
    //filter this on the backend
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        // console.log(json)
        const results = json.filter((user) => {
          return (
            value &&
            user &&
            user.name &&
            user.name.toLowerCase().includes(value)
          );
        });
        console.log(results);
        f("Search Results");
      });
  };

  function handleKeyPress(e) {
    if (e.key === "Enter") {
      // Trigger the button click event when Enter key is pressed
      searchHandler(e);
    }
  }

  return (
    <div className="searchbar">
      <input
        ref={inputRef}
        type="text"
        placeholder="type something..."
        onKeyDown={handleKeyPress}
      ></input>
      <button onClick={searchHandler}>SEARCH</button>
    </div>
  );
}
