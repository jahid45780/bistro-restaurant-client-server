import axios from "axios";

const axiosPublic = axios.create({
     baseURL: 'https://bistro-restaurant-server-mauve.vercel.app'
})

const UseAxiosPublic = () => {
    return  axiosPublic;
};

export default UseAxiosPublic;