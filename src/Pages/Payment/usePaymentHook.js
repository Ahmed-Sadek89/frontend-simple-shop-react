import { apiLink } from "../../Assets/env";
import axios from "axios";
import { CardElement, useElements, useStripe} from "@stripe/react-stripe-js";
import { useState } from 'react'
import {useNavigate} from 'react-router-dom';
import useCartHook from "../../Hooks/useCartHook";
import { useDispatch } from "react-redux";
import { deleteCartByUserID } from "../../Redux/API_Slice/CartDeleteUserID.slice";
import getCookie from "../../Hooks/getCookie";
import { getCart } from "../../Redux/API_Slice/CartGet.slice";
import { postOrder } from "../../Redux/API_Slice/OrderAdd.slice";

const usePaymentHook = () => {
    // get cart total price
    const {data} = useCartHook();
    const dispatch = useDispatch()
    const totalPriceInCart = data?.cart.reduce((curr, acc) => {
        return curr + (acc.cart.price * acc.cart.quantity)
    }, 0)
    // All required Hooks
    // stripe hooks
    const stripe = useStripe();
    const elements = useElements();

    // states for loading and error payments
    const [ paymentProccessing , setPaymentProccessing ] = useState(false);
    const [ paymentErrorMSG , setPaymentErrorMSG ] = useState('');

    // navigation hook
    const navigate = useNavigate();

    // consoles
    // console.log('paymentProccessing ',  paymentProccessing);
    // console.log('paymentErrorMSG ' ,paymentErrorMSG);
    // console.log(stripe);
    let cartItem = [];
    data?.cart.map((index) => {
        return cartItem.push(index.cart)
    })
    // on submit payment
    const handlePayment = async (e) => {

        // get all values from all inputs
        e.preventDefault();
        const billing_details = {
            name: e.target.name.value,
            email: e.target.email.value,
            address: {
                city: e.target.city.value,
                line1: e.target.address.value,
                state: e.target.state.value,
                postal_code: e.target.zip.value
            }
        };
        setPaymentProccessing(true)

        // put all payment data in paymentMethod
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement),
            billing_details
        });
        // console.log(paymentMethod ? {paymentMethod} : null);
        

        // make your API payment request if no error
        if (!error) {
            const { id } = paymentMethod;
            const OrderPayload = {
                userId: JSON.parse(getCookie('userID')),
                products: [
                    ...cartItem
                ],
                amount: data?.cart.reduce((curr, acc) => curr + acc.cart.quantity, 0),
                address: billing_details.address,
            }
            const res = await axios.post(
                `${apiLink}/checkout/payment`,
                    {
                    amount: totalPriceInCart,
                    id: id,
                    }
            ).then((response) => {
                if (response.data.success) {
                    setPaymentErrorMSG('')
                    setPaymentProccessing(true)
                    navigate('/success')
                }
            })
            .then(() => {
                dispatch(postOrder(OrderPayload))
            }) 
            .then(() => {
                dispatch(deleteCartByUserID(JSON.parse(getCookie('userID'))))
            })
            .then(() => {
                dispatch(getCart(JSON.parse(getCookie('userID'))))
            })
            .catch(error => {
                setPaymentErrorMSG(error.message)
                setPaymentProccessing(false)
            })
            return res
        } else {
            console.log(error.message);
            setPaymentErrorMSG(error.message)
            setPaymentProccessing(false)
        }
    };

    // make style for CardElement
    const iframeStyles = {
        base: {
          border: "1px solid gray",
          fontSize: "16px",
          iconColor: "#fff",
          "::placeholder": {
            color: "#fff"
          }
        },
        invalid: {
          iconColor: "#eb1c26",
          color: "#eb1c26"
        },
        complete: {
          iconColor: "#248a1e"
        }
      };
      const cardElementOpts = {
        iconStyle: "solid",
        style: iframeStyles,
      };

  return {
      stripe,
      paymentProccessing,
      paymentErrorMSG,
      handlePayment,
      cardElementOpts,
      CardElement
  }
}

export default usePaymentHook