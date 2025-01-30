import  'react';
import Navbar from './components/Navbar';
import Slide from "../src/components/slide"
import Logobottoslide from './components/Logobottoslide';
import Hok from './assets/img/HOK.jpg';
import Inputbt from './components/inputbt';
import Daimond from "./components/Daimond";
import Footer from './components/Footer';
import Payment from './components/Payment';

function HOK() {
    return (
        <div className='bg-black h-full-screen'>
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
             <Footer/>
        </div>
    );
}

export default HOK;
