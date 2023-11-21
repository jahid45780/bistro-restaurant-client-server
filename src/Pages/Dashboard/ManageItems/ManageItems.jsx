import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import Swal from "sweetalert2";
import UseAxios from "../../../hooks/UseAxios";
import { Link } from "react-router-dom";


const ManageItems = () => {
    const [menu ,refetch ] = useMenu()
    const axiosSecure = UseAxios()
    const handleDeleteItem =  (item)=>{
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then( async (result) => {
        if (result.isConfirmed) {
          const res = await axiosSecure.delete(`/menu/${item._id}`);
          console.log(res.data);
         
          if(res.data.deletedCount > 0){
           
            // refetch to update the ui
            refetch()
            Swal.fire({
              position: "top-center",
              icon: "success",
              title: `${item.name} has been deleted ` ,
              showConfirmButton: false,
              timer: 1500
            });
          }
        }
      });
    }
    return (
        
        <div>
            <SectionTitle heading="Manage All Items" subHeading="Hurry Up" ></SectionTitle>

         <div>
      
         <div className="overflow-x-auto">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            Number
          </label>
        </th>
        <th>ITEM IMAGE</th>
        <th> ITEM NAME </th>
        <th>PRICE</th>
        <th>UPDATE</th>
        <th>DELETE</th>
        
      </tr>
    </thead>
    <tbody>
      {
         menu.map( (item , index ) =>  <tr key={item._id} >
           <td> {index + 1} </td>
            <td>
                <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={item.image} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div> 
                
              </div>
            </td>
            <td>
              {item.name}
              </td>
            
            <td>
            $ {item.price}
            </td>

            <td>
            <Link to={`/dashboard/updateItem/${item._id}`} >
            <button 
                
               className=" hover:text-teal-600 text-4xl "> <AiFillEdit></AiFillEdit>  
               </button>
            </Link>
            </td>
            <td>
            <button 
            onClick={ ()=> handleDeleteItem(item) }
              className=" hover:text-red-600 text-4xl "> <AiFillDelete></AiFillDelete> </button>
            </td>
          </tr> )

      }
     
     
   
      
    </tbody>
   
    
  </table>
</div>

         </div>

        </div>
    );
};

export default ManageItems;