import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

import { BrowserRouter as Router} from 'react-router-dom';


const App = () => {
  return (
    <Router>
      <Navbar />
      {/* Adicione aqui o restante da sua aplicação */}
      <Hero />
    </Router>
  );
};

export default App;