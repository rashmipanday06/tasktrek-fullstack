import { configureStore } from "@reduxjs/toolkit";
import LoginSlice  from "./feature/loginSlice";
const store= configureStore({
    reducer:{
        login:LoginSlice
    }
})
export default store;