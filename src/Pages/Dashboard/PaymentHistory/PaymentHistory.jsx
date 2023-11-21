import { useQuery } from "@tanstack/react-query";
import UseAuth from "../../../hooks/UseAuth";
import UseAxios from "../../../hooks/UseAxios";


const PaymentHistory = () => {
    const {user} = UseAuth()
    const axiosSecure = UseAxios()

    const {data: payments = [] } = useQuery({
         queryKey:['payments', user.email],
         queryFn: async () =>{
            const res = await axiosSecure.get(`/payments/${user.email}`)
            return res.data
         }
    })
    return (
        <div>
            <h2 className=" text-2xl text-center font-bold" > Total Payments {payments.length}  </h2>

            <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th> Number </th>
        <th>Price</th>
        <th>Transaction Id</th>
        <th> Status </th>
        <th> Date </th>
      </tr>
    </thead>
    <tbody>
      { payments.map( (payment , index) =>  <tr key={payment._id} >
        <th> {index + 1} </th>
        <td> ${payment.price} </td>
        <td> {payment.transactionId} </td>
        <td> {payment.status} </td>
        <td> {payment.date} </td>
      </tr> ) }
     
     
    </tbody>
  </table>
</div>

        </div>
    );
};

export default PaymentHistory;