import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function AddBeer() {
  const [beerName, setHeadline] = useState("");
  const [tagline, setTag] = useState("");
  const[description, setDescription]=useState("")
  const[first_brewed, setFirst_brewed]=useState("")
  const[brewers_tips, setBrewers_tips]=useState("")
  const[attenuation_level, setAttenuation_level]=useState("")
  const[contributed_by, setContributed_by]=useState("")
  const navigate = useNavigate();

 // let beerName,tagline,description,first_brewed,brewers_tips,attenuation_level,contributed_by
  const handleSubmit = (e) => {
    // Prevent page reload on submit    
    e.preventDefault();
    // Create the body for the POST request    
    const body = { name: beerName, 
        tagline: tagline, 
        description:description,
        first_brewed:first_brewed,
        brewers_tips:brewers_tips,
        attenuation_level:attenuation_level,
        contributed_by:contributed_by
    };
    console.log(body)
    axios
      .post("https://ih-beers-api2.herokuapp.com/beers/new", body)
      .then((response) => {
        // Reset the state
        setHeadline("");
        
      console.log(response)
        // Navigate to the `/` page
        navigate('/');
      });
  };


  return (
    <div className="containeradd">
      <h3>Name</h3>
      <div>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <div>
        <input
          type="text"
          name="Name"
          onChange={(e) => setHeadline(e.target.value)}
          value={beerName}
        />
</div>  
        <label>Tagline:</label><div>
        <input
          type="text"
          name="tagline"
          onChange={(e) => setTag(e.target.value)}
          value={tagline}
        />
        </div> 
        <label>Description:</label> <div>
        <input
          type="text"
          name="description"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
        </div>  
         <label>First brewed:</label><div>
        <input
          type="text"
          name="first_brewed"
          onChange={(e) => setFirst_brewed(e.target.value)}
          value={first_brewed}
        /> 
        
        </div>
        <label>Brewers tips:</label>  <div>
        <input
          type="text"
          name="brewers_tips"
          onChange={(e) => setBrewers_tips(e.target.value)}
          value={brewers_tips}
        /> 
        </div>  
         <label>Attenuation level:</label>
         <div> <input
          type="number"
          name="pricePerDay"
          onChange={(e) => setAttenuation_level(e.target.value)}
          value={attenuation_level}
        />  
        </div>
       
            <label>Contributed by:</label><div>
         <input
        type="text"
        name="pricePerDay"
        onChange={(e) => setContributed_by(e.target.value)}
        value={contributed_by}
      /><div>
        <button className="butSubmit"type="submit">Create Beer</button>
        </div>
        </div>
      </form>
      </div>
    </div>
  );
}

export default AddBeer;