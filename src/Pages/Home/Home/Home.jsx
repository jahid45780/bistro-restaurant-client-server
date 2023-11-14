
import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import FeaturedItem from "../FeaturedItem/FeaturedItem";
import PopularManu from "../PopularManu/PopularManu";
import Testimonials from "../Testimonials/Testimonials";


const Home = () => {
    return (
        <div>
            
            <Helmet>
        <title>  Bistro Boss | Home </title>
       
      </Helmet>

          <Banner></Banner>
          <Category></Category>
            <PopularManu></PopularManu>
            <FeaturedItem></FeaturedItem>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;