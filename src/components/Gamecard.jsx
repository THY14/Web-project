import  'react';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const Gamecard = ({ imgsrc, text, link }) => {
  return (
    <div>
      <Link to={link}>
        <div className="overflow-y-auto bg-[#C70C00] w-28 h-36 justify-center items-start rounded-t-2xl rounded-b-xl">
          <img className="w-28 h-28 rounded-xl" src={imgsrc} alt={text} />
          <span className="text-white font-sans text-sm flex justify-center">{text}</span>
        </div> 
      </Link>
    </div>
  );
};

export default Gamecard;
