import  'react';
import Navbar from './components/Navbar';
import Slide from "../src/components/slide"
import Logobottoslide from './components/Logobottoslide';
import PES from './assets/img/PES.jpg';
import Inputbt from './components/inputbt';
import Daimond from "./components/Daimond";
import Footer from './components/Footer';
import Payment from './components/Payment';

function Pes() {
    return (
        <div className='bg-black h-full-screen'>
            <Navbar/>
            <Slide/>
            <Logobottoslide
             Logo = {PES}
             text = "PES Mobile"/>
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

export default Pes;
