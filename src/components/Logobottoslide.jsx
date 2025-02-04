/* eslint-disable react/prop-types */
import  'react'

const Logobottoslide = ({Logo,text}) => {
  return (
    <>
    <div className='flex justify-start space-x-5 items-center mt-[1%] lg:flex lg:justify-center lg:w-3/4 lg:-ml-12'>
      <img className='w-16 h-16 ml-5  ' src={Logo} />
      <div>
        <span className='text-[#D49642] text-s font-sans font-bold'>{text}</span>
        <div className='flex justify-start space-x-3 mt-1'>
        <span className='text-white font-sans font-semibold text-[12px] '>Safety</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#fff" d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12c5.16-1.26 9-6.45 9-12V5zm0 6c1.4 0 2.8 1.1 2.8 2.5V11c.6 0 1.2.6 1.2 1.3v3.5c0 .6-.6 1.2-1.3 1.2H9.2c-.6 0-1.2-.6-1.2-1.3v-3.5c0-.6.6-1.2 1.2-1.2V9.5C9.2 8.1 10.6 7 12 7m0 1.2c-.8 0-1.5.5-1.5 1.3V11h3V9.5c0-.8-.7-1.3-1.5-1.3"/></svg>
        <span className='text-white font-sans font-semibold text-[12px] '>Fast Jav</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#fff" d="M7 3v9c0 .55.45 1 1 1h2v7.15c0 .51.67.69.93.25l5.19-8.9a.995.995 0 0 0-.86-1.5H13l2.49-6.65A.994.994 0 0 0 14.56 2H8c-.55 0-1 .45-1 1"/></svg>
        </div>
      </div>
    </div>
    <div className='mt-5 ml-[5%] mb-5'>
        <span className='text-white font-sans font-semibold lg:flex lg:justify-center lg:w-2/4 lg:ml-6'>Enter Your Game ID </span>
    </div>
    </>
  )
}

export default Logobottoslide
