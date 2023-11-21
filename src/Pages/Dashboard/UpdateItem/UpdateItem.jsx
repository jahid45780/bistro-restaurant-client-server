import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import UseAxios from "../../../hooks/UseAxios";
import UseAxiosPublic from "../../../hooks/UseAxiosPublic";
import { AiOutlineSend } from "react-icons/ai";

const image_hosting_key= import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api= `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateItem = () => {
    const { name, category, recipe, price, _id } = useLoaderData();
    const { register, handleSubmit,  } = useForm();
    const axiosSecure = UseAxios();
    const axiosPublic = UseAxiosPublic();
   
    const onSubmit = async (data) => {
      console.log(data)
    //   image upload to imgbb and get an url
    const imageFile = {image: data.image[0]}
    const res = await axiosPublic.post(image_hosting_api, imageFile,{
         headers:{
             'content-type': 'multipart/form-data'
         }
    })


    if(res.data.success){
        //  now sent the menu item data to the server with the img url
        const menuItem = {
             name: data.name,
             category: data.category,
             price: parseFloat(data.price),
             recipe: data.recipe,
             image: res.data.data.display_url
        }
        // 
       const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem);
        console.log(menuRes.data);
        if(menuRes.data. modifiedCount > 0 ){
            // reset()
            //  show success pop
            Swal.fire({
                position: "top-center",
                icon: "success",
                title: `${data.name} is Update the menu ` ,
                showConfirmButton: false,
                timer: 1500
              });
        }
    }
    console.log('with img url',res.data);


    };
    
    return (
        <div>
            <SectionTitle heading="Update an Item" subHeading="Update Info" ></SectionTitle>

            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full my-3">
                        <label className="label">
                            <span className="label-text">Recipe Name*</span>
                        </label>
                        <input type="text"
                              defaultValue={name}
                            placeholder="Recipe Name"
                            {...register('name', {required: true})}
                            required
                            className="input input-bordered w-full" />

                    </div>

                  <div className=" flex gap-2" >
                    {/* category */}
                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">Category*</span>
                        </label>
                        <select
                        defaultValue={category}
                        {...register('category', {required: true})}
                        className="select select-bordered w-full">
                        <option disabled value='default' > select a category </option>
                        <option value="salad">Salad</option>
                        <option value="pizza">Pizza</option>
                        <option value="soup">Soup</option>
                        <option value="dessert">Dessert</option>
                        <option value="drinks"> Drinks </option>

                    </select>

                    </div>

                    {/* price */}

                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">Price*</span>
                        </label>
                        <input type="number"
                            defaultValue={price}
                            placeholder="Price"
                            {...register('price', {required: true})}
                            className="input input-bordered w-full" />

                    </div>
    
                  </div>
                               {/* recipe details */}
                               <div className="form-control">
  <label className="label">
    <span className="label-text">Recipe Details*</span>
  </label>
  <textarea className="textarea textarea-bordered h-28" defaultValue={recipe} {... register('recipe')} placeholder="Recipe Details"></textarea>
</div>

    <div className=" mt-4 mb-3" >
    <input {...register('image', {required: true}) } type="file" className="file-input file-input-bordered w-full max-w-xs" />
    </div>

                    
        <button className=" btn" >
            Update Menu Item <AiOutlineSend></AiOutlineSend>
        </button>
                </form> 
            </div>



        </div>
    );
};

export default UpdateItem;