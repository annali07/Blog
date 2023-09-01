import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./Components/Header";
import About from "./pages/About";
import Namecard from "./Components/Namecard";
import Searchbar from "./Components/Searchbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
       
        <div className="quote">
          <p className="p1">-------Home</p>
          <p className="p2">在这道路的前方，大概就是，美好的每一天。</p>
        </div>

        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
          <div className="sidebar">
            <Namecard />
            <div style={{padding: '40px'}}/>
            <Searchbar/>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
