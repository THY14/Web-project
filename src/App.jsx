import 'react';
import Navbar from './components/Navbar';
import Slide from './components/slide';
import Gamecard from './components/Gamecard';
import Bottomcard from './components/bottomcard';
import Footer from './components/Footer';
import mlbblogo from '../src/assets/img/mlbblogo.jpg';
import COC from '../src/assets/img/COC.png';
import fflogo from '../src/assets/img/fflogo.jpg';
import HOK from '../src/assets/img/HOK.jpg';
import PES from '../src/assets/img/PES.jpg';
import PUBG from '../src/assets/img/PUBG.png';
import { Routes, Route } from "react-router-dom"; 
const App = () => {
  return (
      <div>
        <Navbar />
        <Slide />
        <div>
          <h1 className='font-bold text-xl font-sans flex justify-center'>POPULAR GAMES</h1>
        </div>
        <div className='grid grid-cols-3 grid-rows-2 gap-4 mt-[5%] ml-[3%]'>
          <Gamecard
            imgsrc={mlbblogo}
            text="Mobile Legend" 
          />
          <Gamecard
            imgsrc={COC}
            text="Clash of Clans"
          />
          <Gamecard
            imgsrc={fflogo}
            text="Free Fire"
          />
          <Gamecard
            imgsrc={PES}
            text="PES Football"
          />
          <Gamecard
            imgsrc={HOK}
            text="Honor of King"
          />
          <Gamecard
            imgsrc={PUBG}
            text="PUBG Mobile"
          />
        </div>
        <Bottomcard />
        <Footer /> 
      </div>
  );
};
export default App;
