import  'react';
import Navbar from './components/Navbar';
import Slide from "./components/Slide";
import Logobottoslide from './components/Logobottoslide';
import coc from './assets/img/COC.png';
import Inputbt from './components/inputbt';
import Daimond from "./components/Daimond";
import Footer from './components/Footer';
import Payment from './components/Payment';

function COC() {
    return (
        <div className='bg-black h-screen-full overflow-hidden'>
            <Navbar/>
            <Slide/>
            <Logobottoslide
             Logo = {coc}
             text = "Clash of Clan"/>
             <Inputbt
             place = "User ID"
             />
             <Inputbt
             place = "Sever ID"
             />
             <Daimond/>
             <Payment/>
             <div className='lg:w-9/12 lg:ml-[28%] lg:pl-2 lg:pr-2'>
              <Footer/>
              </div>
        </div>
    );
}

export default COC;