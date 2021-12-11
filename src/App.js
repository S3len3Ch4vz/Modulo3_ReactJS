import logo from "./logo.svg";
import "./App.css";

// Components
//import Counter from "./components/Counter";
import NavBar from "./components/NavBar";
function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				
				
			<NavBar/>

			</header>
			
		</div>
	);
}

export default App;
