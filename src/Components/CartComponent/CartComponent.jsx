import {memo} from 'react'
import { useNavigate } from 'react-router-dom';
import CartItem from './CartItem';

const CartComponent = ({cart}) => {
    console.log('hello i am CartComponent components');
    const navigate = useNavigate()
    const {
        loading: getCartLoading,
        data: getCartData,
        error: getCartError    
    } = cart
    const totalPriceInCart = getCartData?.cart.reduce((curr, acc) => {
        return curr + ( acc.cart.price * acc.cart.quantity )
    }, 0)
    return (
    <div className='cart'>
        {
            getCartError === true &&
            <h1 style={{color: 'red'}}>something went wrong..</h1>
        }
        <div className="container">
            <h2>Your bag</h2>
            <div className="cartBtnslinks">
                <button className='continue' onClick={() => navigate('/')}>
                    continue shopping
                </button>
                <div className="links">
                    <span>shopping bag({getCartData ? getCartData?.count : 0})</span>
                    <span>your watchlist(0)</span>
                </div>
                {getCartData?.count !== 0 && 
                <button className='checkout' onClick={() => navigate('/pay')}>
                    checkout now
                </button>
                }
            </div>
            <div className="cartData">
                <div className="cartItems">
                    {
                        getCartLoading === true &&
                        <h1>loading...</h1>
                    }
                    {/* deal here.. */}
                    {
                    getCartData?.count === 0 
                    ? <h1>no item in this cart</h1>
                    : 
                    getCartData?.cart.map(index =>{
                    const item = index.cart
                    return(
                        <CartItem
                            index={index} 
                            item={item} 
                            key={index._id} 
                        />
                    )})
                    }
                    {/* deal here.. */}
                </div>
                {
                    getCartData?.count !== 0 &&
                   <div className="cartSummary">
                   <h4>order summary</h4>
                   <div className="orderDetail">
                       <span>subtotal</span>
                       <span>$ {totalPriceInCart ? totalPriceInCart : 0}</span>
                   </div>
                   <div className="orderDetail">
                       <span>estimated shipping</span>
                       <span>$ 5.90</span>
                   </div>
                   <div className="orderDetail">
                       <span>shipping discount</span>
                       <span>$ -5.90</span>
                   </div>
                   <div className="orderDetail">
                       <h5>total</h5>
                       <h5>$ {totalPriceInCart ? totalPriceInCart : 0}</h5>
                   </div>
                   <button onClick={() => navigate('/pay')}>
                       checkout now
                   </button>
               </div> 
                }
            </div>
        </div>
    </div>
    )
}

export default memo(CartComponent)