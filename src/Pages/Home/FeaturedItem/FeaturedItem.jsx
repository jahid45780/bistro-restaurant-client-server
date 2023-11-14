import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import Featured from '../../../assets/home/featured.jpg'
import './featured-item.css'
const FeaturedItem = () => {
    return (
        <div className="featured-item   text-white pt-4 my-5 bg-fixed " > 
            <SectionTitle
                subHeading='---Check it out---'
                heading='FROM OUR MENU'
            ></SectionTitle>

            <div className=" md: flex justify-center items-center bg-slate-500 bg-opacity-10 py-20 px-36" >

                <div>
                    <img src={Featured} alt="" />
                </div>

                <div className=" md: ml-8" >
                    <p> Aug 20, 2029 </p>
                    <p className=" uppercase" > WHERE CAN I GET SOME?</p>
                    <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Officia nostrum, expedita laboriosam sint maxime reprehenderit sit libero, soluta dolorum minima officiis atque earum consequuntur neque. Itaque dolor, deleniti facere tempora accusamus facilis nostrum vel. Libero illum voluptatum beatae reprehenderit,
                        ipsum ea ullam fugiat velit optio enim error, doloremque corporis? Quae.</p>
                 

<button className="btn btn-outline border-0  border-b-4 mt-4 ">Order Now</button>
                </div>

            </div>


        </div>

    );
};

export default FeaturedItem;