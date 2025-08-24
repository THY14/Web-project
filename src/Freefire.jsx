import  'react';
import Navbar from './components/Navbar';
import Slide from "./components/Slide";
import Logobottoslide from './components/Logobottoslide';
import free from './assets/img/fflogo.jpg';
import Inputbt from './components/Inputbt.jsx';
import Daimond from "./components/Daimond";
import Footer from './components/Footer';
import Payment from './components/Payment';

function Freefire() {
    return (
        <div className='bg-black h-screen-full overflow-hidden'>
            <Navbar/>
            <Slide/>
            <Logobottoslide
             Logo = {free}
             text = "Free Fire"/>
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

export default Freefire;
