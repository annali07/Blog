import Pagination from "../Components/Pagination";
import Post from "../Components/Post";
//renders a json file. After search method, renders the filtered json file. 
const Home =() =>{

  return(
    <div className="home">
      <Post id="1"/>
      <Post id="2"/>
      <Post id="3"/>
      <Post id="4"/>
      <Post id="5"/>
      <Pagination/>
    </div>
  )
}

export default Home;