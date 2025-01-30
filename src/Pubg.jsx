import  'react';
import Navbar from './components/Navbar';
import Slide from "./components/Slide";
import Logobottoslide from './components/Logobottoslide';
import Pubg from './assets/img/PUBG.png';
import Inputbt from './components/inputbt';
import Daimond from "./components/Daimond";
import Footer from './components/Footer';
import Payment from './components/Payment';

function PUBG() {
    return (
        <div className='bg-black h-full-screen'>
            <Navbar/>
            <Slide/>
            <Logobottoslide
             Logo = {Pubg}
             text = "Pubg Mobile"/>
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

export default PUBG;
