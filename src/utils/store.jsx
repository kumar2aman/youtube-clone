import {configureStore} from "@reduxjs/toolkit"
import appReducer from "./appslice";
const store = configureStore({
    reducer:{
     app:appReducer,
    }
})

export default store;