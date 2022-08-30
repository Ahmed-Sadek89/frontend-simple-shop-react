import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getAllProducts } from '../Redux/API_Slice/Products.slice';

const useProductsHook = () => {
    const dispatch = useDispatch();
    const productsState = useSelector(state => state.products);
    useEffect(() => {
        dispatch(getAllProducts())
    }, [dispatch])
    return productsState
}

export default useProductsHook