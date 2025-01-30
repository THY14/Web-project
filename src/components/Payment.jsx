import  { useState } from 'react';
import Khqr from "../assets/img/khqr.png"; // Ensure your image path is correct
import Qrcode from "../assets/img/qrcode.jpg"; // Ensure your

const Payment = () => {
  const [showModal, setShowModal] = useState(false);

  // Show modal on button click
  const handleButtonClick = () => {
    setShowModal(true);
  };

  // Close modal
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className='flex justify-center my-4'>
      <button
        onClick={handleButtonClick}
        className="flex items-center bg-[#3E3F40] text-white rounded-lg w-11/12 sm:w-96 h-20 gap-x-4 px-5 py-3 cursor-pointer hover:bg-[#2a2b2c] transition-all"
        aria-label="Scan to pay with ABA KHQR"
      >
        <img src={Khqr} alt="KHQR Logo" className="w-16 h-12" />
        <div className="ml-4">
          <p className="text-lg font-sans text-[#FB9924]">ABA KHQR</p>
          <p className="text-sm font-sans font-semibold">Scan to pay with banking app</p>
        </div>
      </button>

      {/* Modal - Payment Instructions or Embedded Payment Widget */}
      {showModal && (
        <div className="fixed inset-0 bg-gray-700 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-10 rounded-lg w-88">
            {/* You can place your payment-related content here, such as QR code or instructions */}
            <div className="mt-4">
              <img src={Qrcode} alt="QR Code" className="w-60 h-60 mx-auto" />
              <p className="text-center mt-2">Scan this QR code to pay </p>
            </div>

            <div className='flex justify-end -mb-5 mt-5 '>
              <button onClick={closeModal} className="  py-3 px-4   bg-red-500 text-white rounded-lg">
              Close
            </button></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Payment;
