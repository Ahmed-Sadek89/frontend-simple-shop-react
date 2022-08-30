import { configureStore } from '@reduxjs/toolkit';
// API_Slice
import productSlice from './API_Slice/Products.slice';
import productsInCatSlice from './API_Slice/ProductsInCat.slice';
import oneProductSlice from './API_Slice/OneProduct.slice';
import SignupSlice from './API_Slice/Signup.slice';
import loginSlice from './API_Slice/Login.slice';
import CartAddSlice from './API_Slice/CartAdd.slice';
import CartGetByIDSlice from './API_Slice/CartGet.slice';
import CartDeleteByIDSlice from './API_Slice/CartDelete.slice';
import CartUpdateByIDSlice from './API_Slice/CartUpdate.slice';
import CartDeleteByUserIDSlice from './API_Slice/CartDeleteUserID.slice';
import OrderAddSlice from './API_Slice/OrderAdd.slice';
// USER_Slice


export const Store = configureStore({
    reducer: {
        products: productSlice,
        productsInCat: productsInCatSlice,
        oneProduct: oneProductSlice,
        signup: SignupSlice,
        login: loginSlice,
        cart_add: CartAddSlice,
        cart_get_by_UserID: CartGetByIDSlice,
        cart_delete_by_cartID: CartDeleteByIDSlice,
        cart_update_by_cartID: CartUpdateByIDSlice,
        cart_delete_by_UserID: CartDeleteByUserIDSlice,
        order_add: OrderAddSlice
    }
})