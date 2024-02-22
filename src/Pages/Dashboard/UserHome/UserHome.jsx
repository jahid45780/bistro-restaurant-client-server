import UseAuth from "../../../hooks/UseAuth";


const UserHome = () => {
    const {user} = UseAuth()
    return (
        <div>
            <h2 className=" text-3xl font-bold text-center"  >
                <span className=" text-4xl text-fuchsia-500" > Hi Welcome </span>
                {
                    user?.displayName ? user.displayName : 'Back'
                }
            </h2>
            

              <div style={{backgroundImage: 'url(https://i.ibb.co/qFTgL4V/25694514-2203-w026-n002-1515b-p1-1515.jpg)'}} className=" text-white rounded-full p-20  mt-10 " >
             

                  <div className="avatar online">
              <div className="w-24 rounded-full text-center">
               <img className=" text-center " src={user?.photoURL} alt="" />
                </div>
                 </div>

              <p className=" text-2xl mt-3" > {user?.displayName} </p>
              <p className=" text-xl mt-3" > {user?.email} </p>
              <p> <span className=" font-bold" >lastSignInTime:</span> {user?.metadata.lastSignInTime} </p>
              

              </div>

        </div>
    );
};

export default UserHome;

