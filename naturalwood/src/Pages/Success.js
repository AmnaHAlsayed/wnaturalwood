import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import { userRequest } from "../requestMethod";
import styled from "styled-components";
import { mobile } from "../responsive";

const Contanier= styled.div`
  height:calc(100vh - 50px);
display: flex;
align-items: center;
justify-content: center;`


const Wrapper = styled.div`
width: 60%;
height: 75%;
-webkit-box-shadow:0px 5px 33px -21px  rgba(66,68,90,1);
-moz-box-shadow:0px 5px 33px -21px  rgba(66,68,90,1);
box-shadow: 0px 5px 33px -21px  rgba(66,68,90,1);
display: flex;
align-items: center;
border-radius: 20px;
flex-direction:column;
;`

const Success = () => {
  const location = useLocation();
  //in Cart.jsx I sent data and cart. Please check that page for the changes.(in video it's only data)
  const data = location.state.stripeData;
  const cart = location.state.cart;
  const currentUser = useSelector((state) => state.user.currentUser);
  const [orderId, setOrderId] = useState(null);

  useEffect(() => {
    const createOrder = async () => {
      try {
        const res = await userRequest.post("/orders", {
          userId: currentUser._id,
          mobileNumber:currentUser.mobileNumber,
          products: cart.products.map((item) => ({
            productId: item._id,
            quantity: item._quantity,
          })),
          amount: cart.total,
          address: data.billing_details.address,
        });  console.log(res.data);
        setOrderId(res.data._id);
      
      } catch {}
    };
    data && createOrder();
  }, [cart, data, currentUser]);

  return (
<Contanier>
  <Wrapper>
    <h2 style={{marginRight:50,marginLeft:50}}>Youre Order will be deliverd within two days</h2>
    <br/>

    <h3 style={{ marginRight: 50 ,marginLeft:50}} >  
     {orderId
        ? `Order has been created successfully`
                : `Sorry! Failed to create your Order .
                Please Contact Us ... `}</h3>
      <button  style={{ 
 padding: 10, marginTop: 20 }}><Link style={{   color:"inherit",
 textDecoration: "none",
 margin: 20,
 fontWeight: 700}} to="/">Go to Homepage</Link></button>
    </Wrapper>
</Contanier>  );
};

export default Success;