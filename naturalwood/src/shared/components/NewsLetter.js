import styled from 'styled-components';
import React from 'react'
import { Send } from '@material-ui/icons';
import { mobile } from '../../responsive';
const Container = styled.div`
height:60vh;
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
background-color:#fcf5f5;`
const Title = styled.h1`
font-size:70px;
margin-bottom:10px;
${mobile({fontSize:"50px"})};
`
const Desc = styled.div`
font-size:50px;
margin-bottom:5px;
${mobile({ fontSize:"30px",textAlign:"center"})};

`
const InputContainer = styled.div`
width:50%;
height:40px;
background-color:white;
display:flex;
align-items:center;
justify-content:center;
border:1px solid lightgray;
${mobile({width:"80%"})};

`
const Input = styled.input`
border:none;
flex:7;
padding-left:20px;
`
const Button = styled.button`
flex:1;
border:none;
background-color:#6f2232 ;
color:white;
cursor:pointer;
`

const NewsLetter=()=> {
    return (
       <Container>
           <Title>NewsLetter</Title>
           <Desc>Give Us Some Complement</Desc>
           <InputContainer><Input placeholder="your email"/>
               <Button><Send/></Button></InputContainer>

       </Container>
    )
}
export default NewsLetter;
