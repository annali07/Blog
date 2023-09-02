import Post from "../Components/Post";
import { useEffect } from "react";
//renders a json file. After search method, renders the filtered json file. 
const Home =() =>{

  return(
    <div className="home">
      <Post/>
      <Post/>
    </div>
  )
}

export default Home;