
import { Link, useNavigate } from 'react-router-dom';
import imgUp from '../../assets/others/authentication.gif'
import { useForm } from 'react-hook-form';
import { Helmet } from 'react-helmet-async';
import { useContext } from 'react';
import { AuthContext } from '../../Poviders/AuthProvider';
import Swal from 'sweetalert2';
import UseAxiosPublic from '../../hooks/UseAxiosPublic';
import SocialLogin from '../../Components/SocialLogin/SocialLogin';

const SignUp = () => {
    const axiosPublic = UseAxiosPublic()
     const { createUser, updateUserProfile}= useContext(AuthContext)

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()

    const navigate = useNavigate()

    const onSubmit  = data =>{
         console.log(data);
         createUser(data.email, data.password)
         .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser);
             updateUserProfile(data.name, data.photoURL)
             .then(()=>{
                 console.log('user profile info update');
                //  create user in the data base
                const userInfo = {
                    name:data.name, 
                    email:data.email,

                } 
                axiosPublic.post('/users', userInfo)
                .then(res=>{
                    if(res.data.insertedId){
                        console.log('user add the the database ');
                        reset()
                       Swal.fire("SignUp SuccessFull");
                       navigate('/')  
                    }
                })       
             })  
              
             .catch(error => console.log(error))
         })
    }

  
    return (
        <div>
             <Helmet>
        <title>Bistro Boss |  SignUp </title>
             
      </Helmet>
            <h1 className=' text-4xl font-bold text-center mt-12' >Sign Up Now </h1>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <img src={imgUp} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Name" {...register("name",{ required: true })}  className="input input-bordered" />
                                {errors.name && <span className=' text-red-600' >Name field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo Url</span>
                                </label>
                                <input type="text" placeholder="Photo URL" {...register("photoUrl",{ required: true })}  className="input input-bordered" />
                                {errors.photoUrl && <span className=' text-red-600' > PhotoUrl field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" {...register("email",{ required: true })} name="email" className="input input-bordered"  />
                                {errors.name && <span className=' text-red-600' >email field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" {...register("password",{ required: true, minLength: 6, maxLength:20,pattern: /[A-Za-z]/i })} name="password" className="input input-bordered" />
                                {errors.password?. type === 'minLength'  &&  <p className=' text-red-700' > Password must be 6 characters </p>}
                                {errors.password?. type === 'maxLength'  &&  <p className=' text-red-700' > Password must be less then 20 characters </p>}
                                {errors.password?. type === 'pattern'  &&  <p className=' text-red-700' > Password must be uppercase  characters </p>}
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Sign Up</button>
                            </div>
                        </form>
                        <SocialLogin></SocialLogin>
                        <p className=' text-center mb-5 text-xl' >  Already registered?  <Link to='/login' > Go to log in </Link> </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;