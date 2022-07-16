import beers from "./assets/beers.png"
import newbeer from "./assets/new-beer.png"
import { Routes, Route } from "react-router-dom";
import randombeer from "./assets/random-beer.png"
import Navbar from "./Navbar"
import Main from "./pages/main";
import BeerList from "./pages/beers";
import "./App.css";
import Beer from "./pages/beer";
import BeerRandom from "./pages/random-beer";
function App() {
 
 
 
  return (   <div className="App">
    <Navbar/>
    <Routes>
   <Route path="/" element={< Main />} />
   <Route path="/beers" element={<BeerList/>} />
   <Route path="/beer/:beerId"  element={<Beer />} />
   <Route path="/randombeer"  element={<BeerRandom />} />
   </Routes>
 
  







     

     


    </div>
  );
}

export default App;
