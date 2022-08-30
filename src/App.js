// libs
import { memo } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// custom hooks
import useProductsHook from './Hooks/useProductsHook';
import getCookie from './Hooks/getCookie';
import useCartHook from './Hooks/useCartHook';
// pages
import Cart from "./Pages/Cart/Cart";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import ProductList from "./Pages/ProductList/ProductList";
import Signup from "./Pages/Signup/Signup";
import SingleProduct from "./Pages/SingleProduct/SingleProduct";
import Payment from './Pages/Payment/Payment';
import SuccessPayment from './Pages/SuccessPayment/SuccessPayment';

 
const App = () => {
  console.log('i am app');
  const productsState = useProductsHook()
  const token = getCookie('token') && JSON.parse(getCookie('token'))
  const getCartState = useCartHook()
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='*' element={
            <h1>404 page not found</h1>
          }/>
          <Route path='/' element={
            <Home products={productsState} cart={getCartState} />
          }/>
          <Route path='/products/:category' element={
            <ProductList cart={getCartState} />} 
          />
          <Route path='/product/:id' element={
            <SingleProduct cart={getCartState} />
          } />
          
          <Route path='/pay' element={
            (token && getCartState.data?.count !== 0)
            ? <Payment /> 
            : <Navigate to='/' />
          } />
          <Route path='/success' element={
            token
            ? <SuccessPayment />
            : <Navigate to='/login' />
          } />
          <Route path='/login' element={
            !token ? <Login /> : <Navigate to='/' /> 
          } />
          <Route path='/register' element={
            !token ? <Signup /> : <Navigate to='/' /> 
          }  />
          <Route path='/cart' element={
            token 
            ? <Cart cart={getCartState} /> 
            : <Navigate to='/login' />
          } />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default memo(App);
