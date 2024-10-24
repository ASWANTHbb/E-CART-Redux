import { configureStore } from "@reduxjs/toolkit"
import WishlistSlice from "./WishlistSlice"
import  cartSlice  from "./cartSlice"






const store = configureStore({
    reducer:{
            Wishlist : WishlistSlice,
           cartItem  : cartSlice
        
    }
})

export default store