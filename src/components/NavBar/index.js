import React, {useState} from "react";

// Styles
import "./NavBar.css";

function NavBar() {
	const [active, setActive] = useState(3);

	const handleClick = (itemID) => {
		setActive(itemID);
	};

	const checkActive = (itemID) => (active === itemID ? "li-active" : "");

	return (
		<div>
			<ul>
				<li className={checkActive(1)} onClick={(e) => handleClick(1)}>
					Item 1
				</li>
				<li className={checkActive(2)} onClick={() => handleClick(2)}>
					Item 2
				</li>
				<li className={checkActive(3)} onClick={() => handleClick(3)}>
					Item 3
				</li>
			</ul>
		</div>
	);
}

export default NavBar;