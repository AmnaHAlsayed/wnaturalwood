import { publicRequest } from "../requestMethod";
import { loginFailuer, loginStart, loginSuccess ,logout } from "./userRedux"
import{deleteProductStart,deleteProductSuccess,deleteProductFailure,deleteAllProductSuccess,deleteAllProductStart,deleteAllProductFailure, addProduct} from './cartRedux';
export const login = async(dispatch , user)=>{
dispatch(loginStart());
try{
const res = await publicRequest.post("/auth/login" , user);
dispatch(loginSuccess(res.data));
res.data && window.location.replace("/");
}catch(err){
 dispatch(loginFailuer());   
}

};

export const carts = async(dispatch,cart)=>{
  try{
    const res =await publicRequest.post("/cart", cart);
    dispatch(addProduct(res.data));
    
  }catch(err){
    console.log(err) }
}
export const loogout = async ( dispatch) => {
   
    try {
      // const res = await userRequest.delete(`/products/${id}`);
      dispatch(logout());
    } catch (err) {
    console.log(err)
    }
  };
  export const deleteProduct = async (id, dispatch) => {
    dispatch(deleteProductStart());
    try {
       //const res = await userRequest.delete(`/products/${id}`);
      dispatch(deleteProductSuccess(id));
    } catch (err) {
      dispatch(deleteProductFailure());
    }
  };
  export const deleteAllProduct = async ( dispatch) => {
    dispatch(deleteAllProductStart());
    try {
       //const res = await userRequest.delete(`/products/${id}`);
      dispatch(deleteAllProductSuccess());
    } catch (err) {
      dispatch(deleteAllProductFailure());
    }
  };

