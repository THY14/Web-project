import 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Navigation } from 'swiper/modules';


const slide = () => {
  return (
    <div>
      
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className=" overflow-y-auto  mySwipe h-64 mt-[35%] rounded-lg lg:w-2/4 lg:h-2/4 lg:mt-[10%]"
      >
        <SwiperSlide><img  src={"https://systopup.com/admin/uploads/689b3715d861c.jpeg"} /></SwiperSlide>
        <SwiperSlide><img src={"https://systopup.com/admin/uploads/689b3715d861c.jpeg"} /></SwiperSlide>
        <SwiperSlide><img src={"https://systopup.com/admin/uploads/689b3715d861c.jpeg"} /></SwiperSlide>
      
        
      </Swiper>  
    </div>
  )
}

export default slide
