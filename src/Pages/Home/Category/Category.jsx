import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide5.jpg'
import slide5 from '../../../assets/home/slide4.jpg'
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';



const Category = () => {
    return (
        <div>
            <SectionTitle
               subHeading={'from 11.00am to 10.00pm'}  
               heading={'Order Online'}
            ></SectionTitle>

             <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-20"
      >
        <SwiperSlide>
            <img src={slide1} alt="" />
            <h3 className=' text-2xl text-center uppercase -mt-14 text-white' > Salads </h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide2} alt="" />
            <h3 className=' text-2xl text-center uppercase -mt-14 text-white' > Soups </h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide3} alt="" />
            <h3 className=' text-2xl text-center uppercase -mt-14 text-white' > pizzas </h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide4} alt="" />
            <h3 className=' text-2xl text-center uppercase -mt-14 text-white' > desserts </h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide5} alt="" />
            <h3 className=' text-2xl text-center uppercase -mt-14 text-white' > desserts </h3>
        </SwiperSlide>
        {/* <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
        </div>
    ); 
};

export default Category;