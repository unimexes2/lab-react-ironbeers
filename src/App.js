import beers from "./assets/beers.png"
import newbeer from "./assets/new-beer.png"
import { Routes, Route } from "react-router-dom";
import randombeer from "./assets/random-beer.png"
import './App.css';
import Navbar from "./Navbar"
function App() {
 
 
 
  return (
    
    <div className="App">
      <Navbar/>
      <a style={{ display: "flex", margin: "auto" }} href="/beers">
        <div className="container1">
          <img src={beers} />
          <div className="content1">
             <h4>Beers</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              q </p>
          </div>

        </div>

      </a>
      <a style={{ display: "flex", margin: "auto" }} href="/newbeer">
        <div className="container1">
          <img src={newbeer} />
          <div className="content1">
          <h4>New Beer</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              q </p>
          </div>

        </div>

      </a>
      <a style={{ display: "flex", margin: "auto" }} href="/randombeer">
        <div className="container1">
          <img src={randombeer} />
          <div className="content1">
          <h4>Random Beer</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              q </p>
          </div>
       </div>
      </a>


      <div>

     </div>




    </div>
  );
}

export default App;
