import Pagination from "../Components/Pagination";
import Post from "../Components/Post";
//renders a json file. After search method, renders the filtered json file. 
const Home =() =>{

  return(
    <div className="home">
      <Post/>
      <Post/>
      <Pagination/>
    </div>
  )
}

export default Home;