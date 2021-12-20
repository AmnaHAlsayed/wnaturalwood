import axios from "axios";

//NODE_ENV = 'devlopment'
//NODE_ENV = 'production'
//if production BASE_URL = /api/
//const BASE_URL = "http://localhost:5000/api/";


const BASE_URL =process.env.NODE_ENV === 'production'?
"api/" : "http://localhost:5000/api/";

const TOKEN=(JSON.parse(localStorage.getItem("persist:root")));

export const publicRequest = axios.create({
   BASE_URL ,
});

export const userRequest = axios.create({
    baseURL : BASE_URL , 
    headers : {token : `Bearer ${TOKEN}`}
})