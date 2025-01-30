import 'react'
import javlogo2 from '../assets/img/javlogo2.png';

const Navbar = () => {
  return (
    <nav className=" bg-[#C70C00] pb-[3%] w-full top-0 left-0 fixed z-50">
    <div className="flex items-center ">
        <img  className="h-24 w-24 -mb-[1%] object-fit" src={javlogo2}  />
      </div>
      <h1 className='text-3xl font-bold font-sans flex justify-center items-center mt-[-14%] text-white '>JAV TOPUP</h1>
      <div className=" flex justify-end mt-[-8%] pr-5  ">
          <button className="text-white text-3xl  ">☰</button>
        </div>
    </nav>
    
);
  
}

export default Navbar
