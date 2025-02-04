import 'react'
import javlogo2 from '../assets/img/javlogo2.png';
function Navbar() {
  return (
      
          <nav className=" bg-[#C70C00] pb-[3%] w-full top-0 left-0 fixed z-50 lg:h-20 ">
          <div className="flex items-center">
          <a href="/"><img className="h-24 w-24 -mb-[3%] object-fit lg:w-34 lg:h-34 lg:mt-15 " src={javlogo2} /></a>
          </div>
          <h1 className='text-3xl font-bold font-sans flex justify-center items-center mt-[-15.5%] text-white lg:mt-[-4%] lg:justify-start lg:ml-24 lg:fixed'>JAV TOPUP</h1>
          <div className='hidden lg:flex justify-end mt-[-4.2%] mr-14 '>
            <button type="button" href="#" className='lg:text-white bg-[#F89E30] hover:bg-[#F89E30] focus:outline-none focus:ring-2 focus:ring-[#F89E30] font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-[#F89E30] dark:hover:bg-[#F89E30] dark:focus:ring-[#F89E30]'>Contast us</button>
          </div>
          <div className=" flex justify-end mt-[-8%] pr-5  ">
            <button className="text-white text-3xl lg:hidden  ">☰</button>
          </div>
        </nav>     
  );

}
export default Navbar
