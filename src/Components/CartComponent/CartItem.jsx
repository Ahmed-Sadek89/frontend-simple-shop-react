import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ItemColor } from './Styles'
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { deleteCart } from '../../Redux/API_Slice/CartDelete.slice';
import { getCart } from '../../Redux/API_Slice/CartGet.slice';
import { updateCart } from '../../Redux/API_Slice/CartUpdate.slice';

const CartItem = ({index, item}) => {
    console.log('hello i am cardItem component');
    const dispatch = useDispatch()
    const { 
        loading: deleteCartLoading,
        error: deleteCartError
    } = useSelector(({cart_delete_by_cartID}) => cart_delete_by_cartID)
    const { 
        loading: updateCartLoading,
        error: updateCartError
    } = useSelector(({cart_update_by_cartID}) => cart_update_by_cartID)
    const [qty, setQty] = useState(item?.quantity)
    const handleInc = () => {
        setQty( prev => {
            return prev + 1
        })
    }
    const handleDec = async () => {
        setQty( prev => {
            return prev - 1
        })
        if (qty === 1) {
            const res = await dispatch(deleteCart(index._id)).then(() => {
                dispatch(getCart(index.userId))
            })
            return res
        }
    }
    const handleUpdate = async () => {
        if(qty === item?.quantity){
            console.log('there is no change in quantity to update');
        } else{
            const res = await dispatch(updateCart({
                id: index._id, 
                cart: {
                    ...index.cart,
                    quantity: qty
                }
            }))
            .then(() => dispatch(getCart(index.userId)))
            return res
        }
    }
    return (
        <>
            <div className="cartItemContent">
                {
                    (deleteCartLoading === true || updateCartLoading === true) &&
                    <div className="loadingState"></div>
                }
                <div className="cartImg">
                    <img 
                        src={item.image} 
                        alt={item.title} 
                    />
                </div>
                <div className="cartInfo">
                    <p><b>product: </b>{item.title}</p>
                    <p><b>ID: </b>{item.productId}</p>
                    <ItemColor className='itemColor' color={item.color}></ItemColor>
                    <p><b>Size:</b> {item.size}</p>
                </div>
                <div className="cartOption">
                    <div className="chooseCount">
                        <button onClick={handleInc}>
                            <AddIcon />
                        </button>
                        <span>{ qty }</span>
                        <button onClick={handleDec}>
                            <RemoveIcon />
                        </button>
                    </div>
                    <h3><b>$ </b>{item.price * qty}</h3>
                    <button className='update' onClick={handleUpdate}>update</button>
                    {
                        updateCartError === true &&
                        <p style={{color: 'red'}}>update failed</p>
                    }
                    {
                        deleteCartError === true &&
                        <p style={{color: 'red'}}>delete failed</p>
                    }
                </div>
            </div>
            <hr />
        </>
    )
}

export default CartItem