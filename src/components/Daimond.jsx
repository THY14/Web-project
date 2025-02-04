import  'react';
// import ABA from "../assets/img/ABA.png"
import One from "../assets/img/onedai.png";
import more from "../assets/img/moredai.png";
import weekly from "../assets/img/weekly.png";
import twomore from "../assets/img/twomoredai.png";
import three from "../assets/img/threemoredai.webp";
const DiamondTopUp = () => {
  const options = [
    { id: 1, name: ' 11 Daimonds', price: '0.25$', image: One  },
    { id: 2, name: ' 22 Daimonds', price: '0.50$', image: One  },
    { id: 3, name: ' 56 Daimonds', price: '1.00$', image: more },
    { id: 4, name: 'Weekly Pass', price: '1.70$', image: weekly },
    { id: 5, name: '112 Daimonds', price: '2.00$', image: more },
    { id: 6, name: '336 Daimonds', price: '5.00$', image: more },
    { id: 7, name: '570 Daimonds', price: '9.00$', image: twomore},
    { id: 8, name: '1163 Daimonds', price: '18.00$', image: twomore},
    { id: 9, name: '2398 Daimonds', price: '34.00$', image: three },
    { id: 10, name: '6236 Daimonds', price: '82.00$', image: three },
    { id: 11, name: '10833 Daimonds', price: '143.00$', image: three },
  ];

  return (
    <div className="max-w-screen-md mx-auto p-3  ">
      <div className="flex flex-wrap justify-evenly gap-x-2 gap-y-4 border-red-600 lg:w-3/4  lg:grid lg:grid-cols-2 lg:grid-rows-2 lg:gap-8 lg:ml-[18%]">
        {options.map((option) => (
          <button
            key={option.id}
            className="flex items-center gap-3 cursor-pointer  justify-center bg-[#3E3F40] text-white rounded-lg p-4  w-44 h-16  hover:bg-[#C70C00]"
    
          >
            <img src={option.image} alt={option.name} className="w-16 h- -ml-4 " />
            <div>
             
              <p className="flex text-l font-sans text-[#FB9924] justify-start">{option.price}</p>
              <p className="text-xs font-sans -mr-3 font-600 ">{option.name}</p>
              
            </div>
          </button>
        ))}
      </div>
      <h1 className='text-white font-sans text-lg ml-[3%] p-2 mt-3 lg:-ml-2  '>Select your payment method</h1>
    </div>

  );
};

export default DiamondTopUp;
