import { Add, Remove } from '@material-ui/icons';
import React ,{useState ,useEffect}  from 'react'
import styled from 'styled-components';
import { mobile } from '../responsive';
import { useLocation } from 'react-router';
import{ publicRequest} from '../requestMethod';
import {addProduct} from '../redux/cartRedux';
import { useDispatch } from 'react-redux';
const Container = styled.div``
const Wrapper = styled.div`
padding:50px;
display:flex;
${mobile({padding:"10px", height:"20vh"})};
`
const ImageContainer = styled.div`
flex:1;

`
const Image = styled.img`
width:100%;
height:90vh;
object-fit:cover;

${mobile({height:"40%"})};`
const InfoContainer = styled.div

`
flex:1;
padding: 0px 50px;
${mobile({padding:"10px"})};`
const Title = styled.h3`
font-weight:300;`
const Desc = styled.p`
margin:20px 0px;`
const Price = styled.span
`
font-weight:100;
font-size:40px;`
const AddContainer= styled.div`
display:flex;
width:50%;
justify-content:space-between;
align-items:center;
${mobile({width:"100%"})};`
const AmountContainer = styled.div`
display:flex;
align-items:center;
font-weight:700;`

const Amount = styled.span`
width:30px;
height:30px;
border-radius:10px;
border:1px solid gray; 
display:flex;
 align-items:center;
justify-content:center; 
margin:0px 5px;`

const Button = styled.button
`
font-size:15px;
margin :5px;
padding:5px;
border:2px solid gray;
background-color:white;
cursor:pointer;
font-weight:700;
&:hover{
 background-color : #f8f4f4; 
 
};
${mobile({fontSize:"10px"})};`

const Product=()=> {
    const location = useLocation();
    const  productId =location.pathname.split("/")[2];
    const[product ,setProduct] =  useState({});
    const [quantity , setquantity]= useState(1);
    const dispatch = useDispatch();
const handlequantity=(type)=>{
    if(type === "dec"){
      quantity > 1 && setquantity(quantity - 1);
    }
    else{
        setquantity(quantity + 1);
    }
}
const handleButtonCart =()=>{
    //update Cart
    dispatch(
    addProduct({ ...product ,quantity }));
    
}
    useEffect(() => {
     const getProduct = async()=>{
     try{
const res = await publicRequest.get("/products/find/" + productId)
setProduct(res.data);
     }
     catch(err){

     }
    }
     getProduct()
    }, [productId]);
    return (
     <Container>
         <Wrapper>
<ImageContainer>
    <Image src = {product.img}></Image>
</ImageContainer>
<InfoContainer>
    <Title>{product.title}</Title>
    <Desc>{product.desc}</Desc>
    <Price>{product.price}Dhs</Price>
    <AddContainer>
        <AmountContainer>
            <Remove/>
             {/* onClick={()=>handlequantity("dec")} */}
            <Amount>{quantity}</Amount>
<Add/>  
   {/* onClick={()=>handlequantity("inc")} */}
        </AmountContainer>
        <Button onClick ={handleButtonCart}>ADD TO CART</Button>
    </AddContainer>
</InfoContainer>
         </Wrapper>
     </Container>
    )
}
export default Product ;