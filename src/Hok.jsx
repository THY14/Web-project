import  'react';
import Navbar from './components/Navbar';
import Slide from "./components/Slide"
import Logobottoslide from './components/Logobottoslide';
import Hok from './assets/img/HOK.jpg';
import Inputbt from './components/Inputbt.jsx';
import Daimond from "./components/Daimond";
import Footer from './components/Footer';
import Payment from './components/Payment';

function HOK() {
    return (
        <div className='bg-black h-screen-full overflow-hidden'>
            <Navbar/>
            <Slide/>
            <Logobottoslide
             Logo = {Hok}
             text = "Honor of King"/>
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

export default HOK;
