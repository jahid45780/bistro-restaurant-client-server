// import { useEffect, useState } from "react"

import { useQuery } from "@tanstack/react-query"
import UseAxiosPublic from "./UseAxiosPublic"

const useMenu = ()=>{
    const axiosPublic = UseAxiosPublic()
    // const [menu, setMenu] = useState([])
    // const [loading, setLoading]= useState(true)
    // useEffect(()=>{
    //     fetch('https://bistro-restaurant-server-mauve.vercel.app/menu')
    //     .then(res=> res.json())
    //     .then(data => {
    //         setMenu(data)
    //         setLoading(false)
    //     })
            
    // isPending: loading,  
            
    // },[])

      const {data: menu = [],  refetch } = useQuery({
          queryKey:['menu'],
          queryFn: async ()=>{
             const res = await axiosPublic.get('/menu') 
              return res.data
          }
      })

    return [menu, refetch]
}

export default useMenu