import UseAuth from "../../../hooks/UseAuth";


const UserHome = () => {
    const {user} = UseAuth()
    return (
        <div>
            <h2>
                <span> Hi Welcome </span>
                {
                    user?.displayName ? user.displayName : 'Back'
                }
            </h2>
        </div>
    );
};

export default UserHome;