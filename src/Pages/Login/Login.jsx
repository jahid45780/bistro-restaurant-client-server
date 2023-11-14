import { useContext, useEffect, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import imgLogin from '../../assets/others/authentication.gif'
import { AuthContext } from '../../Poviders/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';
const Login = () => {
   
   const [disabled, setDisabled]= useState(true)
     
   const {signIn} = useContext(AuthContext)

   const navigate = useNavigate()
   const location = useLocation()

   const from = location.state?.from?.pathname || "/";
     

   useEffect(()=>{
        loadCaptchaEnginge(6); 
    },[])

    const handleLogin = event => {
         event.preventDefault()
         const form = event.target;
         const email = form.email.value;
         const password = form.password.value
         console.log(email, password); 
         signIn(email,password)
         .then(result =>{
            const user = result.user
            console.log(user);
            Swal.fire("Login SuccessFull");
         })
         navigate(from,{replace:true})
    }

    const handleValidateCaptcha = (e) =>{
          const user_captcha_value = e.target.value
          console.log(user_captcha_value);
          if(validateCaptcha(user_captcha_value)){
              setDisabled(false)
          }
          else{
            setDisabled(true)
          }
         
    }

    return (
        <div>
           <Helmet>
        <title>Bistro Boss | Login </title>
             
      </Helmet>
            <h1 className=' text-4xl font-bold text-center  mt-6' > Login Our Website </h1>
          <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
        <img src={imgLogin} alt="" />
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control">
          <label className="label">
          <LoadCanvasTemplate />
          </label>
          <input onBlur={handleValidateCaptcha} type="text"  placeholder=" type the text above"  name="captcha" className="input input-bordered" required />
        
        </div>
        <div className="form-control mt-6">
            <input disabled={disabled} className=" btn btn-primary" type="submit" value="Login" />
        </div>
      </form>
      <p className=' text-center mb-5 text-xl' >  New here? <Link to='/signup' > Create a New Account </Link> </p>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;