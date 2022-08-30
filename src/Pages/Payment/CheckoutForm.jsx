import { memo } from "react";
import Inputs from "./Inputs";
import usePaymentHook from "./usePaymentHook";

const CheckoutForm = () => {
  console.log('hello i am CheckoutForm components');
  const {
    stripe,
    paymentProccessing,
    paymentErrorMSG,
    handlePayment,
    cardElementOpts,
    CardElement
  } = usePaymentHook()
  return (
    <form onSubmit={handlePayment} className='thisForm'>
        <div className="inputsContainer">
          <Inputs />
        </div>
        <div className="paymentContainer">
          {stripe ?  <CardElement options={cardElementOpts}/> : <h4>loading...</h4>}
        </div>
        {
          paymentErrorMSG !== '' && 
          <h4 style={{textAlign: 'center', color: '#eb1c26' ,margin: '5px 0px'}}>
            {paymentErrorMSG }
          </h4>
        }
        {
          paymentProccessing === true ? 
          <button disabled={true} className="loadingPayment">loading...</button> 
          : <button className="beforePayment">Pay Now</button>
        }
      </form>
  );
};

export default memo(CheckoutForm)