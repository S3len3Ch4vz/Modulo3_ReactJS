import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

// Components
//import Counter from "./components/Counter";
//import NavBar from "./components/NavBar";
import CharactersInfo from "./components/CharactersAPI";


//Services 
import {listCharacters} from "./services/characters";

function App() {

	const [characters, setCharacters] = useState([]);
    const [data , setData] = useState({})

	useEffect(() => {
		const list = async () => {
			const {results, info} = await listCharacters();
	
			setCharacters(results); 
			setData(info);
        
		};
		
		list();

	}, []);

	const handleClick = async (action) => {
		if (action === "next" && data.next != null) {
			const page = data.next.split("?")[1];
			const { results, info } = await listCharacters(page);
			setCharacters(results);
			setData(info);
		}
		if (action === "prev" && data.prev != null) {
			const page = data.prev.split("?")[1];
			const {results, info} = await listCharacters(page);
			setCharacters(results);
            setData(info);
		}

	}; 
	console.log(data);



    const charactersUI = characters.map(({id, name , status, species, image }) => (
		<CharactersInfo key={id} name={name} status={status} species={species} image={image} />
	));

	return (
		<div className="App">
		
			<div className="buttons">	
				<button onClick={() => handleClick("next")}>
			Next
		</button> 
		  <button onClick={() => handleClick("prev")}> 
           Prev
		  </button>
           </div>
		
         <CharactersInfo/> {charactersUI}

		</div>
	);
}

export default App;
