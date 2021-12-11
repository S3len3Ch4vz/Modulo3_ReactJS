import React, {useState} from "react";
import koders from "C:/Users/flor_/Downloads/KODEMIA/ReactJS/my-firts-app/src/helper/koders.json";


// Styles
import "./NavBar.css";

function NavBar(props) {
	const [active, setActive] = useState(1);
    console.log(koders)
	const handleClick = (itemID) => {
		setActive(itemID);
	};

	const checkActive = (itemID) => (active === itemID ? "li-active" : "");


	return (
		<div>
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