import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name:"cart",
    initialState:{
        products:[],
        quantity:0,
        total:0,
    },
    reducers:{
        addProduct:(state ,action)=>{
            state.quantity+=1;
            state.products.push(action.payload);
            state.total += action.payload.price * action.payload.quantity;

        },
   
 
        deleteProductStart: (state) => {
            state.isFetching = true;
            state.error = false;
          },
          deleteProductSuccess: (state, action) => {
          state.quantity-=1;
          state.total -= action.payload.price *action.payload.quantity;
            state.products.splice(
              state.products.findIndex((item) => item._id === action.payload),
              1
            );
          },
          deleteProductFailure: (state) => {
            state.isFetching = false;
            state.error = true;
          },
          deleteAllProductStart: (state) => {
            state.isFetching = true;
            state.error = false;
          },
          deleteAllProductSuccess: (state, action) => {
          state.quantity =0;
          state.total= 0;
            state.products=[];
           
          },
          deleteAllProductFailure: (state) => {
            state.isFetching = false;
            state.error = true;
          },
  }
});
export const {addProduct , deleteProductSuccess,deleteProductStart,deleteProductFailure,deleteAllProductSuccess,deleteAllProductStart,deleteAllProductFailure} = cartSlice.actions;
export default cartSlice.reducer;