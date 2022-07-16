import beers from "./assets/beers.png"
import newbeer from "./assets/new-beer.png"
import { Routes, Route } from "react-router-dom";
import randombeer from "./assets/random-beer.png"
import Navbar from "./Navbar"
import Main from "./pages/main";
import BeerList from "./pages/beers";
import "./App.css";
function App() {
 
 
 
  return (   <div className="App">
    <Navbar/>
    <Routes>
   <Route path="/" element={< Main />} />
   <Route path="/beers" element={<BeerList/>} />
   </Routes>
 
     







     

     


    </div>
  );
}

export default App;
