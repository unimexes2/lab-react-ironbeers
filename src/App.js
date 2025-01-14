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
import AddBeer from "./pages/new-beer";
function App() {
 
 
 
  return (   <div className="App">
    
    <Navbar/>
    <div className="MainScreen">
    <Routes>
   <Route path="/" element={< Main />} />
   <Route path="/beers" element={<BeerList/>} />
   <Route path="/beer/:beerId"  element={<Beer />} />
   <Route path="/randombeer"  element={<BeerRandom />} />
   <Route path="/addbeer"  element={<AddBeer />} />
   </Routes>
 
   </div>







     

     


    </div>
  );
}

export default App;
