import { useState, useEffect } from "react";
import axios from "axios";
function BeerList  (props) {
const [beers, setBeers] = useState([]);


  // This effect depends on `props.projects`.
  // It will run on initial render and every time

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then((response) => {
      
        setBeers([...response.data]);
         
      });
  }, []);

 console.log(beers)
  const mystyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial",
    maxheight:"300px",
  allignItem:"left",
    overflow: 'scroll',
     
  };
console.log()
  return (
<div>
<div className="col-5" style={{mystyle}}>
            <div className="list-group"style={{height:'500px',overflow: 'scroll'}}>
           
            {beers.map((beer) => {
                
      

    
        return (   
            <div>
                  <img className="imgtmbl" src={beer.image_url}/> 
           <h4>{beer.name}</h4>
           <h6>{beer.tagline}</h6>
           <h6>Created By:{beer.tagline}</h6>
            </div>    
        );
      
      })}
             
             
           
              
            </div>
</div>
</div>
)
}

export default BeerList ;
