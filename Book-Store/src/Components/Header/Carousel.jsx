import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const Carousel = () => {
    return (
        <>
        <Swiper
          spaceBetween={1}
          centeredSlides={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >


          <SwiperSlide>
            <div className='h-[80vh] w-full flex justify-center items-center bagImg1'>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='h-[80vh] w-full flex justify-center items-center bagImg2'>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='h-[80vh] w-full flex justify-center items-center bagImg3'>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='h-[80vh] w-full flex justify-center items-center bagImg4'>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='h-[80vh] w-full flex justify-center items-center bagImg5'>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='h-[80vh] w-full flex justify-center items-center bagImg6'>
            </div>
          </SwiperSlide>


        </Swiper>
      </>
    );
};

export default Carousel;