import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import UseAxios from "../../../hooks/UseAxios";
import UseCart from "../../../hooks/UseCart";
import UseAuth from "../../../hooks/UseAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";


const CheckoutForm = () => {
    const [error, setError] = useState()
    const [clientSecret, setClientSecret] = useState(' ')
    const [transactionId, setTransactionId] = useState(' ')
    const stripe = useStripe() 
    const elements = useElements();
      
    const axiosSecure = UseAxios();
    const {user} = UseAuth();
    const [cart]= UseCart();
    const navigate = useNavigate();
    const totalPrice = cart.reduce((total, item)=> total + item.price, 0)

    useEffect(()=>{
    if(totalPrice > 0 ){
      axiosSecure.post('/create-payment-intent',{price: totalPrice})
      .then(res => {
         console.log(res.data.clientSecret);
         setClientSecret(res.data.clientSecret)
      })
    }
    },[axiosSecure, totalPrice])
  
    const handleSubmit = async (event) =>{
        event.preventDefault();
      
        if(!stripe || !elements){
            return
        }
        const card = elements.getElement(CardElement)
       
        if (card == null) {
            return;
          }

          const {error, paymentMethod  } = await stripe.createPaymentMethod({
              type: 'card',
              card
          })

          if(error){
            console.log('payment error', error);
            setError(error.message)
          }
         else{
            console.log('payment method', paymentMethod);
            setError('')
         }

          //  Confirm Card Payment
          const {paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret,{
              payment_method:{
                 card: card,
                 billing_details:{
                     email: user?.email || 'anonymous' ,
                     name:user?.displayName || 'anonymous'
                 }
              }
          })
          if(confirmError){
            console.log('confirm error');
          }
          else{
              console.log( 'payment intent', paymentIntent);
            
              if(paymentIntent.status === 'succeeded'){
                 console.log('transaction id', paymentIntent.id);
                 setTransactionId(paymentIntent.id)
                //  now payment save the database
                  const payment ={
                     email: user.email,
                     price: totalPrice,
                     transactionId: paymentIntent.id,
                      date: new Date(),  // utc date convart use movanet js to
                      cartIds: cart.map(item => item._id ),
                      menuItemIds: cart.map(item => item.menuId),
                      status: 'pending'

                  }

                const res = await axiosSecure.post('/payments', payment)
                console.log( 'payment save', res.data);
                if(res.data?.paymentResult?.insertedId){
                  Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: " thank you for the pay bil ",
                    showConfirmButton: false,
                    timer: 1500
                  });
                  navigate('/dashboard/paymentHistory')
                }
                  
              }
          }
    }
    return (
        <div>
            <form onSubmit={handleSubmit} >

            <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button className=" btn btn-primary my-4 py-3" type="submit" disabled={!stripe || !clientSecret}>
        Pay
      </button>
            <p className=" text-red-500" > {error} </p>
                { transactionId && <p className=" text-green-700" > 
                   your transactionId {transactionId}
                 </p> }
            </form>
        </div>
    );
};

export default CheckoutForm;