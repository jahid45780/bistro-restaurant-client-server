import axios from "axios";
import { useNavigate } from "react-router-dom";
import UseAuth from "./UseAuth";

 
 const axiosSecure = axios.create({
      baseURL:'https://bistro-restaurant-server-mauve.vercel.app'
  })

const UseAxios = () => {
    const navigate = useNavigate();
    const {logOut} = UseAuth();
    // request interceptors to add unauthorized header for every secure to the api
     axiosSecure.interceptors.request.use(function(config){
        const token = localStorage.getItem('access-token')
        // console.log('request stopped by interceptors', token);
        config.headers.authorization = `Bearer ${token}`
           return config;
     }, function (error) {
        // Do something with request error
        return Promise.reject(error);
      })

//   interceptors 401 and 402 status
  axiosSecure.interceptors.response.use(function(response){
       return response
  }, async (error)=>{
       const status = error.response.status
        // console.log('status error in the interceptors', status);
        // for 401 and 403 logout the user move the user in the login page
        if(status === 401 || status === 403){
            await logOut()  
            navigate('/login')
        }
     return Promise.reject(error)
    
  })


    return axiosSecure;

};

export default UseAxios;