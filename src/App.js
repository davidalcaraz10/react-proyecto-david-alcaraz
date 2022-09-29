// import logo from './logo.svg';

import {NavBar} from './componentes/NavBar/NavBar.jsx';
import { Hero } from './componentes/Hero/Hero.jsx';
import { Hero2 } from './componentes/Hero2/Hero2.jsx';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/> 
      </header>
      <Hero/>
      <Hero2/>
    </div>
  );
}

export default App;
