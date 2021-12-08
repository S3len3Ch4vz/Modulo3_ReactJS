import logo from './logo.svg';
import './App.css';

import Greeting from "./components/Greeting"
import Calculator from './components/Calculator';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React holi 
        </a>
        <Greeting name="Selene" lastName="Chávez"/>
        <Calculator value1={1} value2={2} operator="suma"></Calculator>
      </header>
    </div>
  );
}

export default App;
