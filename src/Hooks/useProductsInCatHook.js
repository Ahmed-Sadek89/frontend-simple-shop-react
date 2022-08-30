import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getAllProductsInCat } from '../Redux/API_Slice/ProductsInCat.slice';

const useProductsInCatHook = (catName) => {
    const dispatch = useDispatch();
    const productsInCatState = useSelector(state => state.productsInCat);
    useEffect(() => {
        dispatch(getAllProductsInCat(catName))
    }, [dispatch, catName])
    return productsInCatState
}

export default useProductsInCatHook