import  'react';
import Navbar from './components/Navbar';
import Slide from "../src/components/slide"
import Logobottoslide from './components/Logobottoslide';
import free from './assets/img/fflogo.jpg';
import Inputbt from './components/inputbt';
import Daimond from "./components/Daimond";
import Footer from './components/Footer';
import Payment from './components/Payment';

function Freefire() {
    return (
        <div className='bg-black h-full-screen'>
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
             <Footer/>
        </div>
    );
}

export default Freefire;
