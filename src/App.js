import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

// Components
//import Counter from "./components/Counter";
//import NavBar from "./components/NavBar";
import CharactersInfo from "./components/CharactersAPI";


function App() {

	const [characters, setCharacters] = useState([]);
    
	useEffect(() => {
		const getCharacters = async () => {
			const response = await fetch("https://rickandmortyapi.com/api/character");
			console.table(response);
			const data = await response.json();
			console.log(data);
			setCharacters(data.results); 
        
		}
		
	 getCharacters();
	}, []);

    const charactersUI = characters.map(({id, name , status, species, image }) => (
		<CharactersInfo key={id} name={name} status={status} species={species} image={image} />
	));

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				

			</header>
         <CharactersInfo/> {charactersUI}
		</div>
	);
}

export default App;
