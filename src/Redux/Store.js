
import {configureStore} from "@reduxjs/toolkit"   // It is used for creating store
import authSlice from "./features/auth/AuthSlice";



const store = configureStore({
    reducer:{
        auth : authSlice.reducer,

    }
})

export default store;