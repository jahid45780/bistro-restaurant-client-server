import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { app } from "../Firebase/firebase.config";

 export const AuthContext = createContext(null)
 const auth = getAuth(app);

const AuthProvider = ({children}) => {
    
    const [user, setUser]= useState(null)
    const [loading, setLoading] = useState(true)
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
              console.log('currentUser',currentUser);
              setLoading(false)
         })
         return ()=>{
          return unSubscribe()
         }
    },[])

    const authInfo = {
          user,
          loading,
          createUser,
          signIn,
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