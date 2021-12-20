//import { Button } from '@material-ui/core';
import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { userRequest } from '../requestMethod';
import { mobile } from '../responsive';

import { login } from '../redux/apiCalles';
import { useDispatch } from 'react-redux';
import './login.css'

import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,VALIDATOR_EMAIL,VALIDATOR_MOBILE
} from '../shared/util/validators'
import { useForm} from '../shared/hooks/form-hook';
import Input from '../shared/components/Input';
import Button  from '../shared/components/Button';
const Container =styled.div`
width:100vw;
height:100vh;
background-color:#EEE2DC;
background:linear-gradient(rgba(225,225,225,0.5),rgba(225,225,225,0.5));
display:flex;
align-items:center;
justify-content:center;
`
const Wrapper =styled.div`
padding:20px;
width:40%;
background-color:white;
border:2px solid gray;
${mobile({width:"75%"})};`
const Form =styled.form`
display:flex;
flex-wrap:wrap;
flex-direction:column;`
// const Input =styled.input`
// flex:1;
// min-width:40%;
// margin:20px 10px 0px 5px;
// padding:10px;`
// const Button =styled.button`

// display:flex;
// justify-content:center;
// align-items:center;
// width:40%;
// font-size:15px;
// margin-top :20px;
// padding:15px;
// margin-left:100px;
// border:2px solid gray;
// background-color:gray;
// cursor:pointer;
// font-weight:500;

// &:hover{
//  background-color : #f8f4f4;
// };
// ${mobile({marginLeft:"70px"})};`
const Title =styled.h1
`
font-size:24px;
font-weight:300px;`
const Error = styled.span`
color:red;
font-size:14px;
font-weight:500;`


const Register =(props)=> {
const [username,setusername]= useState("");
const[email,setemail]=useState("");
const[password,setpassword]=useState("");
const[mobileNumber,setMobile]=useState("");
const[error,seterror]=useState(false);
const [successful, setSuccessful] = useState(false);
const [message, setMessage] = useState("");
const dispatch = useDispatch();
const handleSubmit =async(e)=>{
    e.preventDefault();
    seterror(false);
    try{
    const res = await userRequest.post("/auth/register",{
        username,
        email,mobileNumber,password
    });
    login(dispatch, {email, password });
}
catch(err){
        seterror(true);
    }}
// AuthService.register(username, email, password).then(
 

//     window.location.replace("/"),
//     (error) => {
//       const resMessage =
//         (error.response &&
//           error.response.data &&
//           error.response.data.message) ||
//         error.message ||
//         error.toString();
//         setMessage(resMessage);
       
//         setSuccessful(false);
       
//       }
//     );
const [formState,inputHandler , setFormData]= useForm({
  username:{
    value :'',
    isValid:false},
   mobileNumber:{
      value :'',
      isValid:false},
  email:{
value :'',
isValid:false}
,
password:{
  value :'',
  isValid:false
}
}
, false);
const authSubmitHandler = async event => {
  event.preventDefault();
console.log(formState.inputs);

  try{
    const res = await userRequest.post("/auth/register",{
        username:formState.inputs.username.value,
        email:formState.inputs.email.value,
        mobileNumber:formState.inputs.mobileNumber.value
        ,password:formState.inputs.password.value
    });
  login(dispatch, {email:formState.inputs.email.value
    ,password:formState.inputs.password.value});}
  catch(err){
 
  } }
  

    return (
     
       <div className="login">
         
        
<h1 className = "loginTitle">Sign Up</h1>
<br/>
<br/><br/>
<div className="wrapper">
           <div className="center">
           {/* <Form >
           <input style={{marginTop:50}} className="input" type="text" placeholder="UserName" onChange={e=>setusername(e.target.value)} validators={[VALIDATOR_REQUIRE]}  errorText="the UserName Is Not uniquie"/>
  <input className="input" type="email" placeholder="Email" onChange={e=>setemail(e.target.value)} validators={[VALIDATOR_REQUIRE]} errorText="The Email is already Sign Up"
  />
    <input className="input"  type="number" placeholder="MobileNumber"  onChange={e=>setMobile(e.target.value)}  
 />
  <input className="input"  type="password" placeholder="Password"  onChange={e=>setpassword(e.target.value)}  
  errorText="Please enter a valid password (at least 5 characters)."/>
  <button className="submit" onClick={handleSubmit}>Sign up</button>
  


               {message && (
            <div className="form-group">
              <div
                className={ successful ? "alert alert-success" : "alert alert-danger" }
                role="alert"
              >
                {message}
              </div>
            </div>
          )}
               {error && <Error>Somthing Can Be Wrong</Error>}

 
      </Form></div> */}
      <form  onSubmit={authSubmitHandler}>
     
      <Input
     id="username"
      element ="input" 
     type="text"
     label="UserName"
     validators ={[VALIDATOR_REQUIRE]}
      errorText="Please Enter Youre valid Name"
      onInput={inputHandler}
    
     />
        <Input
     id="mobileNumber"
      element ="input" 
     type="number"
     label="MobileNumber"
     validators ={[VALIDATOR_MOBILE(10)]}
      errorText="Please Enter Youre valid MobileNumber"
      onInput={inputHandler}
    
     />
      
     <Input
     id="email"
      element ="input" 
     type="email"
     label="E-Mail"
     validators ={[VALIDATOR_EMAIL()]}
      errorText="Please Enter Youre valid Email"
      onInput={inputHandler}
    
     />
          <Input
     id="password"
      element ="input" 
     type="password"
     label="Password"
     validators ={[VALIDATOR_MINLENGTH(5)]}
      errorText="Please Enter Youre valid Password"
      onInput={inputHandler}
    
     />
     <Button>SignUp</Button>
 </form>
      </div></div></div>

     
    )
}
export default  Register;
