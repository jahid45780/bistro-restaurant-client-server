import { NavLink, Outlet } from "react-router-dom";
import { AiOutlineShoppingCart,AiFillHome, AiFillCalendar, AiFillPayCircle, AiOutlineFolderView, AiFillBook, AiOutlineMenu, AiFillContacts, AiOutlineDeliveredProcedure, AiOutlineStop, AiOutlineUser } from "react-icons/ai";
// import UseCart from "../hooks/UseCart";
import UseAdmin from "../hooks/UseAdmin";
const Dashboard = () => {

    // const [cart] = UseCart()
    // todo : get admin value from the data base
    const [isAdmin] = UseAdmin()

    return (
        //  dashboard side bar
        <div className=" flex" >
            <div className=" w-64 min-h-screen bg-orange-500" >

             <ul className=" menu p-5" > 
                      
                      {
                        isAdmin ? <>

                  <li> 
                    
                    <NavLink to='/dashboard/adminHome'>
                     <AiFillHome></AiFillHome>
                        Admin Home </NavLink>
                       
                        </li> 
                    <li> 
                       
                    <NavLink to='/dashboard/addItems'>
                      <AiOutlineDeliveredProcedure></AiOutlineDeliveredProcedure>
                     Add Items  </NavLink>
                       
                        </li> 
                    <li> 
                       
                    <NavLink to='/dashboard/manageItem'>
                      <AiOutlineStop></AiOutlineStop>
                      Manage Item  </NavLink>
                       
                        </li> 
                    <li> 
                       
                    <NavLink to='/dashboard/bookings'>
                    <AiFillBook></AiFillBook>
                      Manage Booking </NavLink>
                       
                        </li> 
                    <li> 
                       
                    <NavLink to='/dashboard/users'>
                     <AiOutlineUser></AiOutlineUser>
                        All Users </NavLink>
                       
                        </li> 
                             
                        </> 
                        :
                        <>
                            <li> 
                    
                    <NavLink to='/dashboard/userHome'>
                     <AiFillHome></AiFillHome>
                        User Home </NavLink>
                       
                        </li> 
                    <li> 
                       
                    <NavLink to='/dashboard/reservation'>
                     <AiFillCalendar></AiFillCalendar>
                     Reservation  </NavLink>
                       
                        </li> 
                    <li> 
                       
                    <NavLink to='/dashboard/paymentHistory'>
                      <AiFillPayCircle></AiFillPayCircle>
                      Payment History  </NavLink>
                       
                        </li> 
                    <li> 
                       
                    <NavLink to='/dashboard/cart'>
                    <AiOutlineShoppingCart></AiOutlineShoppingCart>
                        My Cart </NavLink>
                       
                        </li> 
                    <li> 
                       
                    <NavLink to='/dashboard/review'>
                     <AiOutlineFolderView></AiOutlineFolderView>
                        Add Review </NavLink>
                       
                        </li> 
                    <li> 
                       
                    <NavLink to='/dashboard/booking'>
                     <AiFillBook></AiFillBook>
                        My Booking </NavLink>
                       
                        </li> 
                        </>
                      }
              
                      {/* sherd nev lik */}
                     <div className="divider"></div>
                    
                     <li> 
                    
                    <NavLink to='/'>
                     <AiFillHome></AiFillHome>
                        Home </NavLink>
                       
                        </li>
                     <li> 
                    
                    <NavLink to='/order/salad'>
                     <AiOutlineMenu></AiOutlineMenu>
                        Menu </NavLink>
                       
                        </li>
                     <li> 
                    
                    <NavLink to='/order/contact'>
                     <AiFillContacts></AiFillContacts>
                        Contact </NavLink>
                       
                        </li>

               
             </ul>

            </div>
         {/* dashboard content */}
            <div className=" flex-1 p-9" >
               
               <Outlet></Outlet>

            </div>
        </div>
    );
};

export default Dashboard;