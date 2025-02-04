
import  { useState } from 'react';


const  Inputbt=({place}) =>{
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    if (!isNaN(e.target.value) || e.target.value === '') {
      setInputValue(e.target.value);
    }
  };
  return (
    <div className="flex  items-center space-y-4 p-3">
      <input
        type="number"
        value={inputValue}
        onChange={handleChange}
        className="p-2  border h-12 text-white w-full border-red-600 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-black lg:w-2/4 lg:ml-[25%]"
        placeholder={place}
      />
      
    </div>
  );
}

export default Inputbt
