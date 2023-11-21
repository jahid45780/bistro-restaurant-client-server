import { AiOutlineGoogle } from "react-icons/ai";
import UseAuth from "../../hooks/UseAuth";
import UseAxiosPublic from "../../hooks/UseAxiosPublic";
import { useNavigate } from "react-router-dom";


const SocialLogin = () => {
    const {googleSingIn} = UseAuth()
    const axiosPublic = UseAxiosPublic()
    const navigate = useNavigate()
    const handleGoogleSingIn = ()=>{
         googleSingIn()
         .then(result =>{
            console.log(result.user);
            const userInfo = {
                email: result.user?.email,
                name: result.user?.displayName
            }
            axiosPublic.post('/users', userInfo)
            .then(res =>{
                console.log(res.data);
                navigate('/')
            })
         })
    }
    return (
        <div>
                <div className="divider"></div> 

            <button onClick={handleGoogleSingIn} className="btn ml-28 p-2 ">
                <AiOutlineGoogle className=" text-2xl" ></AiOutlineGoogle>
                 Login With Google 

            </button>
        </div>
    );
};

export default SocialLogin;