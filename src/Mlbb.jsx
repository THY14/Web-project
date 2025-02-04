import  'react';
import Navbar from './components/Navbar';
import Slide from "./components/Slide";
import Logobottoslide from './components/Logobottoslide';
import mlbblogo from "./assets/img/mlbblogo.jpg";
import Inputbt from './components/inputbt';
import Daimond from "./components/Daimond";
import Footer from './components/Footer';
import Payment from './components/Payment';

export default function Mlbb() {
    return (
        <div className='bg-black h-screen-full overflow-hidden'>
            <Navbar/>
            <div className='border-2 border-black '>
            <Slide/>
            <Logobottoslide
             Logo = {mlbblogo}
             text = "Mobile legend:Bang Bang"/>
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
            
             
             
        </div>
    );
}

