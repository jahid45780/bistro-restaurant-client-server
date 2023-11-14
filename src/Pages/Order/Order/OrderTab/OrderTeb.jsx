import FoodCard from "../../../../Components/FoodCard/FoodCard";


const OrderTeb = ({items}) => {
    return (
        <div>
                       <div className=' grid grid-cols-1 lg:grid-cols-3' >
                 {
                        items.map(item => <FoodCard
                          key={item._id}
                          item={item}
                          
                        ></FoodCard> )
                    }
                 </div>
        </div>
    );
};

export default OrderTeb;

