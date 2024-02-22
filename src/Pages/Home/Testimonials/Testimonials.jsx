import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'



const Testimonials = () => {

    const [reviews, setReviews]= useState([])

    useEffect(()=>{
        fetch('https://bistro-restaurant-server-mauve.vercel.app/reviews')
        .then(res=> res.json())
        .then(data => setReviews(data))
    },[])

    return (
        <div className=" my-20" >
            <SectionTitle
               subHeading='---What Our Clients Say---'
               heading='TESTIMONIALS'
            ></SectionTitle>

<Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        
          {
            reviews.map( review =>  <SwiperSlide
                
                    
                key={review._id} >



                    <div className=" flex flex-col items-center mx-20 space-y-3 m-11" > 
                    <Rating
      style={{ maxWidth: 180 }}
      value={review.rating}
      readOnly
    />
                        <p> {review.details} </p>
                        <h3 className=" text-orange-500 font-bold" > {review.name} </h3>
                    </div>
                </SwiperSlide>)
          }
      </Swiper>

        </div>
    );
};

export default Testimonials;