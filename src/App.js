// import logo from './logo.svg';

import {NavBar} from './componentes/NavBar/NavBar.jsx';
import { Hero } from './componentes/Hero/Hero.jsx';
import { Sustaintability } from './componentes/Sustaintability/Sustaintability.jsx';
import { ItemDetailContainer } from './componentes/ItemDetailContainer/ItemDetailContainer.jsx';
import { ItemListContainer } from './componentes/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <NavBar/> 
          <Hero/>
          <Routes>
            <Route path="/" element={<ItemListContainer/>}/>
            <Route path="/item/:id" element={<ItemDetailContainer/>}></Route>
            <Route path="/sustaintability" element={<Sustaintability/>}/>
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
