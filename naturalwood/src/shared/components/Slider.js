
import { ArrowLeftOutlined,  ArrowRightOutlined } from "@material-ui/icons";
import React,{ useState} from "react";
import styled from "styled-components";
//import myImage from '../../image/fkcBiDWQ.jpeg'
import { sliderItems } from "./data";
import { mobile } from "../../responsive";
const Container = styled.div`
width :100vw;
height:100vh;
display:flex;
background-color:white;
position:relative;
overflow:hidden;
${mobile({display:"none"})};
`
const Arrow =styled.div`
width:50px;
height:50px;
background-color:white ;
border-radius:50% ;
display : flex ;
align-items : center ;
justify-content : center ;
position : absolute ;
top:0;
bottom:0;
left:${props=>props.direction === "left"&&"10px"};
right:${props=>props.direction === "right"&&"10px"};
margin:auto;
cursor:pointer;
opacity:0.5 ;
z-index:2;`
const Wrapper = styled.div`
height:100px;
display:flex;
transition:all 1.5s ease;
transform:translatex(${props => props.slideIndex * -100}vw);
`
const Slide = styled.div`
width:100vw;
height : 100vh;
display:flex;
align-items:center;
background-color : #${props =>props.bg};
`
const ImageContanier= styled.div`
margin-top: 20px;
margin-left:50px;
align-items:center;
display:flex;
flex : 1 ;`
const Image = styled.img`
width:50%;
height:90%;


`
const InfoContanier = styled.div`
margin-top:70px;
align-items:center;
flex:1;
`
const Title = styled.h1`
font-size:70px;
`
const Par = styled.p`
margin : 50px 0px;
font-size: 20px;
font-weight:500;
letter-spacing : 3px;
`
const Button = styled.button`
padding:10px;
font-size:20px;
background-color:transparent;
align-items:center;

cursor:pointer;

`

const Slider =()=>{
  const[slideIndex,setSlideIndex]=useState(0);
  const handleClick = (direction) => {
    if(direction === "left"){
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);

    }
    else{
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };
  const handleproducts =()=>{
    window.location.replace('/products')
  };
return(
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
    </Arrow>
    <Wrapper slideIndex={slideIndex}>
      {sliderItems.map((item)=>(
<Slide bg={item.bg} key={item.id}>
      <ImageContanier><Image  src={item.img} /></ImageContanier>
      <InfoContanier><Title>{item.title}</Title>
      <Par>{item.par} </Par>
      <Button onClick={handleproducts}>Show All Product</Button></InfoContanier>
      </Slide>
     ))}
    </Wrapper>
    <Arrow direction="right"  onClick={()=>handleClick("right")}> 
      <ArrowRightOutlined/>
    </Arrow>
    </Container>)


};

export default Slider;