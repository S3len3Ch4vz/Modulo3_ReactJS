//import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

// Components
//import Counter from "./components/Counter";
//import NavBar from "./components/NavBar";
import CharactersInfo from "./components/CharactersAPI";
import Forms from "./components/Form"

//Services 
import {listCharacters} from "./services/characters";

function App() {

	const [characters, setCharacters] = useState([]);
    const [data , setData] = useState({})
    const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const list = async () => {
			const {results, info} = await listCharacters();
	
			setCharacters(results); 
			setData(info);
			setIsLoading(false);
        
		};
		
		list();

	}, []);

	const handleClick = async (action) => {
		setIsLoading(true);
		let page;
		if (action === "next" && data.next != null) {
			page = data.next.split("?")[1];
		}
		if (action === "prev" && data.prev != null) {
			page = data.prev.split("?")[1];
			
		}
		const {results, info} = await listCharacters(page);
			setCharacters(results);
            setData(info);
			setIsLoading(false);

	}; 
	console.log(data);
    const hasPrevLink = data.prev ? true : false;
	const hasNextLink = data.next ? true : false;


    const charactersUI = characters.map(({id, name , status, species, image }) => (
		<CharactersInfo key={id} name={name} status={status} species={species} image={image} />
	));

	return (
		<div className="App">
		  <header>
           <Forms/> 
		  </header>
			<div className="buttons">	
			{hasPrevLink ? (
					<button
						disabled={isLoading}
						onClick={() => handleClick("prev")}
						className="btn"
					>
						Prev
					</button>
				) : null}
				{hasNextLink ? (
					<button
						disabled={isLoading}
						onClick={() => handleClick("next")}
						className="btn"
					>
						Next
					</button>
				) : null}
           </div>
		  
         <CharactersInfo/> {charactersUI}

		</div>
	);
}

export default App;
