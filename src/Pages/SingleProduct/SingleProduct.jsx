import {memo, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import Announcement from '../../Components/Announcement/Announcement'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import Newsletter from '../../Components/Newsletter/Newsletter'
import SADEK from '../../Components/SADEK/SADEK'
import OneProduct from '../../Components/OneProduct/OneProduct'
import { useLocation } from 'react-router-dom';
import { getProductOfThisID } from '../../Redux/API_Slice/OneProduct.slice';

const SingleProduct = ({cart}) => {
  console.log('hello i am SingleProduct page');

  const dispatch = useDispatch();
  const product = useSelector(state => state.oneProduct);
  const location = useLocation();
  const productID = location.pathname.split('/')[2]
  const {data} = cart
  useEffect(() => {
    dispatch(getProductOfThisID(productID))
  }, [dispatch, productID])

  return (
    <>
        <Navbar cart={data?.status === 200 && data?.count} />
        <Announcement />
    
        <OneProduct productState={product} cart={cart} />

        <Newsletter />
        <Footer />
        <SADEK />
    </>
  )
}

export default memo(SingleProduct)