import { memo } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { PUBLIC_KEY } from '../../Assets/env'
import CheckoutForm from "./CheckoutForm";


const stripeTestPromise = loadStripe(PUBLIC_KEY);

const Payment = () => {
  console.log('hello i am Payment page');
 
  return (
    <div className='formPayment'>
        <Elements stripe={stripeTestPromise}>
            <CheckoutForm/>
        </Elements>
    </div>
  );
};

export default memo(Payment);