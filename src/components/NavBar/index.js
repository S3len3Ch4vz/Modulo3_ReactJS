import React, {useState, useEffect} from "react";
//import {koders} from "C:/Users/flor_/Downloads/KODEMIA/ReactJS/my-firts-app/src/helper/koders.json";


// Styles
import "./NavBar.css";

function NavBar() {
	const [active, setActive] = useState(1);
    const [koders, setKoders] = useState([])
    

	

useEffect(() => {
	 const getUsers = async () => {
        // await fetch()
		const response = await fetch("koders.json")
	   console.table(response);
      const data = await response.json();
	  console.log(data);
	  setKoders(data.koders)
	}; 
	getUsers();
	},[] );
  
	console.log(koders)
//	console.log(Koders)
	

	const handleClick = (itemID) => {
		setActive(itemID);
	};

	const checkActive = (itemID) => (active === itemID ? "li-active" : "");


	return (
		<div>
			 <ul>
			   {
				koders.map((koder) => (
					<li key={koder.id}
					className={checkActive(koder.id)}
					onClick={() => handleClick(koder.id)}
					>
                     {koder.firstName}{koder.lastName} 
					</li>
				))
			   }
		   </ul>
		   <br/>
			<ul>
				<li className={checkActive(1)} onClick={(e) => handleClick(1)}>
					Item 1 
                    <div hidden ={checkActive(1) ? false : true}>Mucho Texto en 
                    la lista del Item 1</div>
				</li>
				<li className={checkActive(2)} onClick={() => handleClick(2)}>
					Item 2
                    <div hidden ={checkActive(2) ? false : true}>Mucho Texto en 
                    la lista del Item 2</div>
				</li>
				<li className={checkActive(3)} onClick={() => handleClick(3)}>
					Item 3
                    <div hidden ={checkActive(3) ? false : true}>Mucho Texto en 
                    la lista del Item 3</div>
				</li>
			</ul>
		
          
		</div>

	);
}

export default NavBar;
