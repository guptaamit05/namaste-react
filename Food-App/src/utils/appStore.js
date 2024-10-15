import {configureStore} from "@reduxjs/toolkit"
import cartReducer from "./cartSlice"
// Build store
const appStore = configureStore({
    reducer:{
        cart:cartReducer
    }

})


export default appStore