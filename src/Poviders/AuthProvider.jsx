import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../Firebase/firebase.config";
import UseAxiosPublic from "../hooks/UseAxiosPublic";

 export const AuthContext = createContext(null)
 const auth = getAuth(app);

const AuthProvider = ({children}) => {
    
    const [user, setUser]= useState(null)
    const [loading, setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider()
    const axiosPublic = UseAxiosPublic()
    //  created user
     const createUser = (email, password)=>{
        setLoading(true)
         return createUserWithEmailAndPassword(auth, email, password)
     }
    // sign in
    const signIn = (email, password)=>{
          setLoading(true)
          return signInWithEmailAndPassword( auth, email,password)
    }
   
    // google signIn
    const googleSingIn = ()=>{
         setLoading(true)
         return signInWithPopup(auth, googleProvider)
    }


   //LogOut user
   const logOut = ()=>{
       setLoading(true)
       return signOut(auth)
   }    

   // updateUserProfile
   const   updateUserProfile = (name, photo)=>{
     return   updateProfile(auth. currentUser,{
             displayName: name, photoURL:photo
       });
   }   

    useEffect(()=>{
      const unSubscribe =   onAuthStateChanged(auth, currentUser=>{
              setUser(currentUser)
              if(currentUser){
                // get store token
                const userInfo = {email: currentUser.email}
                   axiosPublic.post('/jwt',  userInfo )
                   .then(res =>{
                      if(res.data.token){
                         localStorage.setItem('access-token', res.data.token)
                        
                      }
                   })
              }
              else{
                // todo remove token (if store the clint site)
                localStorage.removeItem('access-token');
                
              }
              console.log('currentUser',currentUser);
              setLoading(false)
         })
         return ()=>{
          return unSubscribe()
         }
    },[axiosPublic])

    const authInfo = {
          user,
          loading,
          createUser,
          signIn,
          googleSingIn,
          logOut,
          updateUserProfile
    }
    return (
          <AuthContext.Provider value={authInfo} >
              {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;