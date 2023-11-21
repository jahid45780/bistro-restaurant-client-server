import Swal from "sweetalert2";
import UseAuth from "../../hooks/UseAuth";
import { useLocation, useNavigate } from "react-router-dom";
import UseAxios from "../../hooks/UseAxios";
import UseCart from "../../hooks/UseCart";

// import axios from "axios";


const FoodCard = ({item}) => {
    const { image, price, name, recipe, _id } = item;
    const {user}= UseAuth()
    const navigate = useNavigate()
    const location = useLocation()
    const axiosSecure = UseAxios()
    const [, refetch] = UseCart()

    const handleAddToCart = () =>{
        if(user && user.email){
          //  set cart to the database
             

            const cartItem = {
                 menuId: _id,
                 email: user.email,
                 name,
                 image,
                 price,
            }
            axiosSecure.post('/carts', cartItem)
              .then(res=>{
                 console.log(res.data);
                 if(res.data.insertedId){
                  Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: `${name} add to your cart `,
                    showConfirmButton: false,
                    timer: 1500
                  });
                  // refetch the cart update the cart item count
                  refetch()
                 }
              })
        }
        else{
          Swal.fire({
            title: "Your Not Logged In",
            text: "please login add to the cart",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes! Login"
          }).then((result) => {
            if (result.isConfirmed) {
            //  sent the user to the login page
                navigate('/login', {state: {from: location } } )
            }
          });
        }
    }
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={image} alt="Shoes" /></figure>
   <p className=" absolute right-0 mr-4 mt-4 px-4 bg-slate-900 text-white" > $ {price} </p>
  <div className="card-body flex flex-col items-center h-64 space-y-4 ">
    <h2 className="card-title"> {name} </h2>
    <p> {recipe} </p>
    <div className="card-actions justify-end">
    
      <button 
      onClick={handleAddToCart}
      className="btn btn-outline border-0  border-b-4 bg-slate-100 border-orange-600 "> Add To cart </button>
    </div>
  </div>
</div>
        </div>
    );
};

export default FoodCard;