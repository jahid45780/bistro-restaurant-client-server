import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import ManuItem from "../../Shared/ManuItem/ManuItem";

const MenuCategory = ({items, title, img}) => {
    return (
        <div className=" pt-7" >
           { title && <Cover img={img} title={title} ></Cover>}
               <div className=" grid md: grid-cols-2 gap-3 mb-2 my-16 " >
   
   {
    items.map(item => <ManuItem
        key={item._id}
        item={item}
    ></ManuItem> )
   }

        </div> 
         <div className=" text-center" >
         <Link to={`/order/${title}` }>  
       
       <button className="btn btn-outline border-0  border-b-4 mt-4  ">Order Now</button> 
       </Link>
         </div>
        </div>
    );
};

export default MenuCategory;