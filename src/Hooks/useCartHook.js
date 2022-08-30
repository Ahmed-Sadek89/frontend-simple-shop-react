import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getCart } from '../Redux/API_Slice/CartGet.slice';
import getCookie from './getCookie';

const useCartHook = () => {
    const userId = getCookie('userID') && JSON.parse(getCookie('userID'))
    const dispatch = useDispatch();
    const getCartState = useSelector(state => state.cart_get_by_UserID);
    useEffect(() => {
        dispatch(getCart(userId))
    }, [dispatch, userId])
    return getCartState
}

export default useCartHook