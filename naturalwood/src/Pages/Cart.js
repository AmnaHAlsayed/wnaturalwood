import { requirePropFactory } from '@material-ui/core';
import { Add, Remove } from '@material-ui/icons';
import React,{ useState ,useEffect} from 'react'
import styled from 'styled-components';
import { mobile } from '../responsive';
import { useSelector ,useDispatch } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import {publicRequest, userRequest} from '../requestMethod';
import { useHistory, useParams } from 'react-router';
import { DeleteOutline } from "@material-ui/icons";
import { deleteProduct,deleteAllProduct, carts } from '../redux/apiCalles';
import { Link } from 'react-router-dom';

const KEY = "pk_test_51Jy0sVLjRsySDg5tFfXJNt6zOcT3Y5rN0CoyPocc9XwvaH2iGbEwDmu32EmflqwywYo0xUs1A1BAboIFEotZhoqE00SEJa15Xk"
const Container = styled.div``
const Wrapper = styled.div`
padding:20px;
${mobile({padding:"10px"})};`
const Title = styled.h1`
font-weight:300;
text-align:center;`
const Top = styled.div`
display:flex;
align-items:center;
justify-content:space-between;'
`
const TopButton = styled.button`

padding: 10px;
font-weight:600;
cursor:pointer;
border:${(props)=>props.type === "filled" && "none"};
background-color:${(props)=>props.type === "filled " ? "black" : "transparent"};
color :${(props)=>props.type === "filled " && "white"};
`
const TopTexts = styled.div`
${mobile({display:"none"})};`
const TopText = styled.span`
text-decortion : underline;
cursor:pointer;
margin:10px;
`
const Bottom = styled.div`
display:flex;
justify-content:space-between;
${mobile({flexDirection:"column"})};`
 const Info = styled.div`
 flex:3;`
 const Product = styled.div`
 display:flex;
 justify-content:space-between;
 ${mobile({flexDirection:"column"})};`
 const ProductDetails = styled.div`
 margin:50px;
 flex:2;
 display:flex;
 ${mobile({ margin:"0px"})};`
 const Image = styled.img`

 width:50%;
 ${mobile({marginTop:"5px",width:"50%"})};`
 const Details = styled.div`
 padding:20px;
 display:flex;
margin-top:15px;
 flex-direction:column;
 ${mobile({marginRight:"20px"})};`
 const ProductName = styled.span``
 const ProductId = styled.span``
 const PriceDetails = styled.div`
 flex:1;
 display:flex;
 align-items:center;
 justify-content:center;
 flex-direction:column;`
 const  ProductAmountContainer = styled.div`
 display:flex;
 align-items:center;
 justify-content:center;`
 const ProductAmount = styled.div`
 font-size:24px;
 margin:5px;
 ${mobile({margin:"5px 15px"})};`
const ProductPrice = styled.div`
font-size:30px;
font-weight:300;
${mobile({marginBottom:"5px "})};
`
 const Summary = styled.div`
 flex:1;
 border:0.5px solid lightgray;
 border-radius:10px;
 padding:20px;
 height:50vh;
 `
 const Hr = styled.hr`
 background-color:#eee;
 border:none;
 height:1px;`
 const SummaryTitle=styled.h1`
 font-weight:200;`
 const SummaryItem=styled.div`
 margin : 30px 0px;
 display:flex;
 justify-content:space-between;`
 const SummaryItemText=styled.span``
 const SummaryItemPrice=styled.span``
 const SummaryButton = styled.button`
 width:100%;
 padding:10px;
 background-color:white;
 font-weight:600;`

 const Icon = styled.div`
width:40px;
height:40px;
border-radius:50%;
background-color:white;
display:flex;
align-items:center;
justify-content:center;
margin:10px;
transition: all 0.5s ease ;
&:hover{
    background-color:#e9f5f5;
    transform:scale(1.1);
}
cursor:pointer;

`
 const Cart=()=> {
      const cart = useSelector(state => state.cart);
      const productt= useSelector(state => state.cart.products)
     const user = useSelector(state => state.user.currentUser)
      const [stripeToken,setStripeToken]=useState(null);
      const [product ,setProduct]= useState({})
      const dispatch = useDispatch();
      const history = useHistory();
      const onToken = (token)=>{
setStripeToken(token);

      };
      useEffect(() => {
        const makeRequest = async()=>{
            try{
const res = await userRequest.post("/stripe/payment",{
    tokenId:stripeToken.id, 
    amount: cart.total*100,
    
   
}); history.push("/success" ,{  stripeData: res.data,
   cart, });
console.log(cart);
            }catch(err){}
        }
     stripeToken &&  makeRequest();
          }
      , [stripeToken, cart.total ,history])
  
      const handleDelete = (id) => {
        deleteProduct(id,dispatch);
       };
       const handleDeleteAllProduct = () => {
        deleteAllProduct(dispatch);
       };
  

     
    return (
      <Container>
<Wrapper>
    <Title>
        Your BAG
    </Title>
    <Top>
        <TopButton type="filled">Continoue Shopping</TopButton>
        <TopTexts>
            <TopText>Shopping Bag({cart.quantity})</TopText>
            <TopText>Your Wishlist</TopText>
        </TopTexts>
        <TopButton type="filled"  onClick={handleDeleteAllProduct}>Clear Cart</TopButton>
    </Top>
    <Bottom>
        <Info>
    {cart.products.map((product)=><Product>
        <ProductDetails>
            <Image src={product.img} />
        
            <Details>
                <ProductName><b>Product: </b>{product.title}</ProductName>
                <ProductId><b>ID: </b>{product._id}</ProductId>
            </Details>
        </ProductDetails>
        <PriceDetails>
            <ProductAmountContainer>
          
            <ProductAmount>{product.quantity}</ProductAmount>
          
            </ProductAmountContainer>
            <ProductPrice> {product.price * product.quantity}Dhs</ProductPrice>
            </PriceDetails> 
            <Icon>  <DeleteOutline
 
 onClick={() => handleDelete(product._id)}/>
  </Icon> 
    </Product>
    )}
            <Hr />
           
        </Info>
           <Summary>
            <SummaryTitle>Order Summary</SummaryTitle>
            <SummaryItem>
                <SummaryItemText type="total">SubTotal</SummaryItemText>
                <SummaryItemPrice>{cart.total}Dhs</SummaryItemPrice>
      </SummaryItem>
            {user? <StripeCheckout name="Natural Wood"
            billingAddress
            shippingAddress
            description={`Your total is ${cart.total}`}
            amount = {cart.total*100}
            token={onToken}
            stripeKey={KEY}
            >
               
            <SummaryButton >Check Out</SummaryButton>
            </StripeCheckout>:<h2><Link to="/login">Login</Link></h2> }
        </Summary>
    </Bottom>
</Wrapper>
      </Container>
    )
}

export default Cart;
