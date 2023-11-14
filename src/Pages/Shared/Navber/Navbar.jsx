import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Poviders/AuthProvider";

const Navbar = () => {
     const {user,logOut}= useContext(AuthContext)
      const handleLogOut = ()=>{
          logOut()
          .then(()=>{})
          .error(error =>{error})
      }
    const NavLink =<>
         <li> <Link to='/' > Home </Link> </li>
          <li> <Link to='/menu' > Our Menu </Link> </li>
          <li> <Link to='/order/salad' > Order Food </Link> </li>
          <li> <Link to='/secret' > Secret </Link> </li>
       
          {/* {
            user ? <>
              <button onClick={handleLogOut} className=" btn btn-ghost" > LogOut  </button>
            </> : <> <li> <Link to='/login' > Login </Link> </li></>
          } */}
          
    </>

    return (
        <div>
            <div className="navbar fixed z-10 bg-opacity-30 max-w-7xl bg-black text-white">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {
            NavLink 
        }
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl block "> BISTRO BOSS <br /> <span className=" text-sm font-thin " >R E S T A U R A N T</span></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
       {
         NavLink
       }
    </ul>
  </div>
  <div className="navbar-end">
          
  {
           user ? (<div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src={user?.photoURL} />
                  </div>
                </label>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-60">
                  <li>
                    <a className="justify-between">
                      Profile
                      <span> <img className=" w-7 h-7 rounded-full" src={user?.photoURL} alt="" /> </span>
                    </a>
                    <p className=" text-xl p-3 " > {user?.displayName} </p>
                    <p className=" -ml-2  p-3 " > {user?.email} </p>
                   
                  </li>
                  <button onClick={ handleLogOut } className=" btn btn-secondary mr-4 " > Sign Out </button>
             
                </ul>
              </div>)
               : (<Link to='/login' > <button className=" btn btn-secondary mr-4 " > Login </button> </Link>)
                   
            }


     
  </div>
</div>
        </div>
    );
};

export default Navbar;