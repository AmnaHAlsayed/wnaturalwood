import React ,{useState } from 'react';
import { Link } from 'react-router-dom';
     
        import styled from 'styled-components';
import { login } from '../redux/apiCalles';
      import { mobile } from '../responsive';
import './login.css';
      import {useDispatch ,useSelector} from 'react-redux';
      import {
        VALIDATOR_REQUIRE,
        VALIDATOR_MINLENGTH,VALIDATOR_EMAIL
      } from '../shared/util/validators'
      import { useForm} from '../shared/hooks/form-hook';
import Input from '../shared/components/Input';
import Button  from '../shared/components/Button';


import Google from '../shared/components/img/google.png';
import facebook from '../shared/components/img/fac.png';


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
      ${mobile({width:"75%" , alignItems:"center"})}; `
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
      // &disabled{
      //   color:white;
      //   cursor:not-allowed;
      // };
      // ${mobile({marginLeft:"70px"})};`
      const Title =styled.h1
      `
      font-size:24px;
      font-weight:300px;`
//       const Link = styled.a`
// margin:10px 0px;
// font-size:12px;
// text-decoration:underline;
// cursor:pointer;`
const Error = styled.span`
color:red;`
      
const Login = () => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const dispatch = useDispatch();
  // const { isFetching, error } = useSelector(usersSelector);
  // const authContext = useContext(AuthContext);
  // const [successful, setSuccessful] = useState(false);
  // const [message, setMessage] = useState("");
  // const handleClick = async(e) => {
  //   e.preventDefault();
//     try{
// const res =  await userRequest.post("/auth/login",{
//   email,
//   password
// });
//  authContext.login(res.data.id);
//  console.log(res.data);
 
//     }catch(err){
//       console.log(err);

//     }
   
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const dispatch = useDispatch();
const { isFetching } = useSelector((state) => state.user);
const[error,seterror]=useState(false);

const handleClick = (e) => {
  e.preventDefault();
  seterror(false);
  try{
  login(dispatch, {email, password });}
  catch(err){
    seterror(true);
  }
};


const [formState,inputHandler , setFormData]= useForm({
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
  login(dispatch, {email:formState.inputs.email.value
    ,password:formState.inputs.password.value});}
  catch(err){
 
  } }
  


  return (
 
//     <Container>
//       <Wrapper>
//         <Title>SIGN IN</Title>
//         <Form>
//           <Input
//             placeholder="username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />
//           <Input
//             placeholder="password"
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <Button onClick={handleClick} disabled={isFetching}>
//             LOGIN
//           </Button>
//           {error && <Error>Something went wrong...</Error>}
//           <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
//           <Link>CREATE A NEW ACCOUNT</Link>
//         </Form>
//       </Wrapper>
//     </Container>
//   );
// };
<div className="login">
<h1 className = "loginTitle">Login </h1>
<div className="wrapper">
{/* <div className="left">
  <div className="loginButton google">
    <img width="40px" height="40px"src={Google} alt="" className="icon"/>
    Google
  </div>
  <div className="loginButton facebook">
    <img width="40px" height="40px"src={facebook} alt="" className="icon"/>
   Facebook
  </div>

</div>
<div className="center">
    <div className="line"/>
    <div className="or">OR</div> */}
 
<div className="center">
  {/* <Form  >
  <input  className="input" type="text" placeholder="Email" onChange={e=>setEmail(e.target.value)}/>
        
  <input  className="input"  type="password" placeholder="Password"  onChange={e=>setPassword(e.target.value)}
/>
  <button className="submit" onClick={handleClick}>LogIn</button>
 <span className="link"> {error && <Error>Something went wrong...</Error>}</span>
 
   <Link className="link"to="/register">CREATE A NEW ACCOUNT</Link>
   <Link className="link">Forgot Passowrd ?</Link>
  </Form> */}
    <form  onSubmit={authSubmitHandler}>
     
     
      
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
           <Button>Log In</Button>
       </form>
      
</div>
 <Link className="link"to="/register">CREATE A NEW ACCOUNT</Link>
</div></div>
  );
};
export default Login;