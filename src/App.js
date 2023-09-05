import { BrowserRouter, Routes, Route} from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import Header from "./Components/Header";
import About from "./pages/About";
import Namecard from "./Components/Namecard";
import Searchbar from "./Components/Searchbar";
import Footer from "./Components/Footer";
import TagBar from "./Components/TagBar";
import SinglePost from "./Components/SinglePost";


function App() {
  const [heading, setHeading] =useState("Home")
  const [postHeading, setPostHeading] = useState(null);
  
  const getHeading=(e)=>{
    setHeading(e)
     
  }
  const handlePostData = (data) => {
    // Update the state with the data received from SinglePost
    setPostHeading(data);
  };


  return (
    <div className="App">
      <BrowserRouter>
        <Header f={getHeading} />
       
        <div className="quote">
          <p className="p1">-------{heading}{postHeading && ` / ${postHeading}`}</p>
          <p className="p2">在这道路的前方，大概就是，美好的每一天。</p>
        </div>

        <div className="pages">
          <Routes>
            <Route path="/" element={<Home/> } />
            <Route path="/about" element={<About/>} />
            <Route path="/posts/:id" element={<SinglePost onPostData={handlePostData}/>} />
          </Routes>
          <div className="sidebar">
            <Namecard />
            <div style={{padding: '40px'}}/>
            <Searchbar f={getHeading}/>
            <div style={{paddingBottom: '40px'}}/>
            <TagBar/>
          </div>
        </div>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
