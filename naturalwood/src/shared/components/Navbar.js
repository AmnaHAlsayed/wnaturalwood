import React ,{useContext,useState,useEffect} from 'react';
import './Navbar.css';
import styled from 'styled-components';
import {Search, ShoppingCartOutlined} from '@material-ui/icons';
import { Badge } from '@material-ui/core';
import myImage from '../../image/NaturalWOODLOgo.PNG';
import { mobile } from '../../responsive';
import { useDispatch,useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { loogout } from '../../redux/apiCalles';


const Container  = styled.div`
height :60px ;
${mobile({height:"50px" })}
`
const Wrapper = styled.div`
padding : 10px 20px ;
display : flex;
justify-content : space-between;
align-items:center;
${mobile({  justifyContent:"center" ,padding : "10px 0px "  })};
`
const Left=styled.div`
 flex:1;
display : flex ;
align-items : center;
${mobile({padding:"0px"})};
`
const Center=styled.div`
flex : 1;
display:flex;
align-items:center;
${mobile({   margin:"0px"})};`
const Right=styled.div` flex: 1 ;
display:flex;
justify-content:flex-end;
${mobile({ flex:2 ,justifyContent:"center"})};`
const Language = styled.span`font-size:14px;
cursor : pointer ;
${mobile({display:"none"})};`
const SearchContainer = styled.div`
border : 0.5px solid lightgray;
display:flex;
align-items: center;
margin-left:25px ;
padding :5px;
${mobile({margin:"5px"})};`
const Input = styled.input`
border : none;
${mobile({width:"50px"})};`
const Logo = styled.img`
margin-left:100px;
align-items:center;
width:70px;
height:60px;
${mobile({margin:"0px", width:"50px"})};`
const MenuItem = styled.div`
font-size : 14px ;
cursor: pointer ;
margin-left : 25px;
${mobile({fontSize:"12px" , marginLeft:"10px"})};
`
const Button = styled.button``
const Navbar =()=>{
 // const authContext  = useContext(AuthContext);
 // const [currentUser, setCurrentUser] = useState(undefined);
 const User =useSelector((state) => state.user.currentUser);
  const quantity = useSelector(state => state.cart.quantity);
  

  const dispatch = useDispatch();


// const logout = () => {

//   loogout(dispatch);

  
// };

return(
 

    <div className = "navbar">
<Link to ="/">
        <img className="logo" src={myImage} alt="Logo"/>
        
 </Link>



{User &&
      (<ul className="list">
        <li className = " listItem">
   <Link className="link" to="/" >Home</Link></li>  <li className = " listItem">
   <Link className="link" to="/products" >Products</Link></li>
        <li className = " listItem">
        
        {/* <img src={myImage}alt =" " className="avatar" /> */}
        </li>
        <li className="listItem link" ><Link to = "/"><Badge badgeContent={User.username} >
        </Badge></Link></li>

        {/* <li className="listItem"onClick={()=>logout()}> Logout</li> */}
        <li className="listItem link  "><Link to = "/cart"><Badge  badgeContent={quantity} color="primary">
         <ShoppingCartOutlined /></Badge></Link></li></ul> )
}
    {!User&&(
   <ul className="list"> 
    <li className="listItem"> <Link className="link"to= "/login">Login</Link></li>
    <li className="listItem"> <Link className="link"to= "/register">Register</Link></li>
    <li className="listItem link  "><Link to = "/cart"><Badge  badgeContent={quantity} color="primary">
         <ShoppingCartOutlined /></Badge></Link></li>
</ul>
    )
  }
  </div>
)

};


export default Navbar;