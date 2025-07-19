import { createSlice, isAction } from "@reduxjs/toolkit"

const initialState={
    username:'',
    isLoggedIn:false,
}
const LoginSlice= createSlice({
    name:'login',
    initialState,
    reducers:{
           loginUser: (state, action) => {
            state.username = action.payload.username;
            state.isLoggedIn = true;
             },
        
    }
})
export const {loginUser}=LoginSlice.actions;
export default LoginSlice.reducer;