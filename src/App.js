import beers from "./assets/beers.png"
import newbeer from "./assets/new-beer.png"
import randombeer from "./assets/random-beer.png"
import './App.css';

function App() {
 
 
 
  return (
    <div className="App">
      <a style={{ display: "flex", margin: "auto" }} href="/beers">
        <div className="container">
          <img src={beers} />
          <div className="content">
             <h4>Beers</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              q </p>
          </div>

        </div>

      </a>
      <a style={{ display: "flex", margin: "auto" }} href="/newbeer">
        <div className="container">
          <img src={newbeer} />
          <div className="content">
          <h4>New Beer</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              q </p>
          </div>

        </div>

      </a>
      <a style={{ display: "flex", margin: "auto" }} href="/randombeer">
        <div className="container">
          <img src={randombeer} />
          <div className="content">
          <h4>Random Beer</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              q </p>
          </div>
       </div>
      </a>


      <div>
     <Routes>
     <Route path="/countries" element={<CountriesList countries={countriesData} />}
            />
    
    <Route path="/countries/:countriesId"  element={<CountryPage />} />
    
     </Routes>
     </div>




    </div>
  );
}

export default App;
