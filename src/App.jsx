 import  'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Mlbb from './Mlbb';
import Coc from './COC';
import Ff from './Freefire';
import Pes from './Pes';
import Hok from './Hok';
import Pubg from './Pubg';
import Home from './Home';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Mlbb" element={<Mlbb/>} />
        <Route path="/clash-of-clans" element={<Coc />} />
        <Route path="/free-fire" element={<Ff />} />
        <Route path="/pes-football" element={<Pes />} />
        <Route path="/honor-of-king" element={<Hok />} />
        <Route path="/pubg-mobile" element={<Pubg />} />
      </Routes>
    </Router>
  );
};

export default App;
