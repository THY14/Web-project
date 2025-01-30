import  'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Slide from './components/Slide';
import Gamecard from './components/Gamecard';
import Bottomcard from './components/Bottomcard';
import Footer from './components/Footer';

import Mlbb from './Mlbb';
import Coc from './COC';
import Ff from './Freefire';
import Pes from './Pes';
import Hok from './Hok';
import Pubg from './Pubg';

import mlbblogo from './assets/img/mlbblogo.jpg';
import COC from './assets/img/COC.png';
import fflogo from './assets/img/fflogo.jpg';
import HOK from './assets/img/HOK.jpg';
import PES from './assets/img/PES.jpg';
import PUBG from './assets/img/PUBG.png';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Slide />
      <div>
        <h1 className='font-bold text-xl font-sans flex justify-center'>POPULAR GAMES</h1>
        <div className='grid grid-cols-3 grid-rows-2 gap-4 mt-[5%] ml-[3%]'>
          <Gamecard imgsrc={mlbblogo} text="Mobile Legend" link="/Mlbb" />
          <Gamecard imgsrc={COC} text="Clash of Clans" link="/clash-of-clans" />
          <Gamecard imgsrc={fflogo} text="Free Fire" link="/free-fire" />
          <Gamecard imgsrc={PES} text="PES Football" link="/pes-football" />
          <Gamecard imgsrc={HOK} text="Honor of King" link="/honor-of-king" />
          <Gamecard imgsrc={PUBG} text="PUBG Mobile" link="/pubg-mobile" />
        </div>
        <Bottomcard />
        <Footer />
      </div>

      <Routes>
        <Route path="/Mlbb" element={<Mlbb/>} />
        <Route path="/clash-of-clans" element={<Coc />} />
        <Route path="/free-fire" element={<Ff />} />
        <Route path="/pes-football" element={<Pes />} />
        <Route path="/honor-of-king" element={<Hok />} />
        <Route path="/pubg-mobile" element={<Pubg />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
