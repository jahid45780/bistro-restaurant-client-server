// import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import ManuItem from "../../Shared/ManuItem/ManuItem";
import useMenu from "../../../hooks/useMenu";


const PopularManu = () => {
    const [menu] = useMenu()
    const popular = menu.filter(item => item.category === 'popular')
        //   const [menu, setMenu] = useState([])
        // useEffect(()=>{
        //     fetch('manu.json')
        //     .then(res=> res.json())
        //     .then(data => {
                
        //         const popularItem = data.filter(item => item.category === 'popular')
        //         setMenu(popularItem)} )
        // },[])



        return (
        <div>
            <SectionTitle
                heading='FROM OUR MENU'
                subHeading='Popular Item'
            ></SectionTitle>
         
        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-3 mb-2 m-3 " >
   
   {
    popular.map(item => <ManuItem
        key={item._id}
        item={item}
    ></ManuItem> )
   }

        </div>
       <p className=" text-center" >
       <button className="btn btn-outline border-0  border-b-4 mt-4 "> View Full Menu </button>
       </p>
        </div>
    );
};

export default PopularManu;