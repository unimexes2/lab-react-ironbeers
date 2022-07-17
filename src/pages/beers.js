import { useState, useEffect } from "react";
import axios from "axios";
function BeerList  (props) {
var [beers, setBeers] = useState([]);
const[search,setSearch]=useState([])

  // This effect depends on `props.projects`.
  // It will run on initial render and every time

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then((response) => {
      
        setBeers([...response.data]);
        setSearch([...response.data]);
      });
  }, []);


  const doSearch=(element)=>{
    beers=[...search];
    console.log("serch",search)
  let searchResult=  beers.filter((beer)=>{
console.log(beer.name,"beer name",element)
if (beer.name.includes(element)){
    return beer
}

    })

    setBeers(searchResult);

};



 console.log(beers)
  const mystyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial",
 
  allignItem:"center",
    overflow: 'scroll',
     
  };
console.log()
  return (
<div style={{display:'flex',flexDirection: 'row'}}>

<div className="col-5" style={{mystyle}}>
            <div className="list-group"style={{height:'600px',overflow: 'scroll'}}>
           
            {beers.map((beer) => {
                
      
               console.log("arr",beers)





    
        return (   
            <div>
                  <img className="imgtmbl" src={beer.image_url}/> 
         <a href={"/beer/"+beer._id}>  <h4>{beer.name}</h4></a>
           <h6>{beer.tagline}</h6>
           <h6>Created By:{beer.tagline}</h6>
            </div>    
        );
      
      })}
             
             
           
              
            </div>
</div>
<div>
<label> Search beer(case sensitive)</label>
<input name="Search"
          onChange={(e) => doSearch(e.target.value)}
          >

          </input>

</div>



</div>
)
}

export default BeerList ;
