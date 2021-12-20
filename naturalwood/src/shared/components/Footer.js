import styled from 'styled-components'
import React from 'react'
import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room } from '@material-ui/icons'
import { requirePropFactory } from '@material-ui/core'
import { mobile } from '../../responsive'
import { Link } from 'react-router-dom'
import './Navbar.css'
const Container = styled.div`
flex:1;
display:flex;
${mobile({flexDirection:"column"})};

`
const Left = styled.div`
flex:1;
display:flex;
flex-direction:column;
padding:20px;
${mobile({margin:"0px"})};
`
const Logo = styled.img`
width:100px;
height:100px;
margin-left:50px;`
const Desc = styled.div`
margin :30px 50px;`
const SocialContainer=styled.div`
margin-left:50px;
display:flex;`
const SocialIcon=styled.div`
width:40px;
height:40px;
border-radius:50%;
color:white;
background-color:#${props => props.color};
display:flex;
align-items:center;
justify-content:center;
margin-right:20px;
cursor:pointer;`
const Center = styled.div`
flex:1;
padding:20px;
${mobile({display:"none"})};
`
const Title=styled.h3`
margin-bottom:30px;`
const List = styled.ul`
margin:0;
padding:0;
list-style:none;

flex-wrap:wrap;`
const ListItem = styled.li`
width:50%;`
const Right = styled.div`
flex:1;
padding:20px;
${mobile({backgroundColor:"#eee"})};
`
const ContactItem =styled.div`
margin-bottom:20px;
display:flex;
align-items:center;
margin-left:3px;
`
const Payment=styled.img`
width:50%;`
const Footer=()=> {
    return (
        <Container>
            <Left><Logo src={require('../../image/NaturalWOODLOgo.PNG').default}>

            </Logo>
            <Desc>Contact With Us.</Desc>
            <SocialContainer>
                <SocialIcon color = "3B5999">
                    <Facebook/>
                </SocialIcon>
                <SocialIcon color="E4405f">
             <a  className= "link" href="https://www.instagram.com/natural_wood_uae/?hl=en">
                   <Instagram/>
            </a>
                </SocialIcon>
                <SocialIcon color= "E60023">
                  <Pinterest/>
                </SocialIcon>
                </SocialContainer></Left>
            <Center>
                <Title>UseFul Links</Title>
                <List>
                    <Link className="link" to ="/"><ListItem>Home</ListItem></Link>
               <Link  className="link" to ="/cart"> <ListItem>Cart</ListItem></Link>
              <Link  className="link" to="/products">  <ListItem>Products</ListItem></Link>
               
               </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem>
                    <MailOutline style={{marginRight:"10px"}}/>
                    abusafia1988@hotmail.com
                </ContactItem>
                <ContactItem>
                   <Phone  style={{marginRight:"10px"}}/>
                    +971 50 143 5679
                </ContactItem>
                <ContactItem>
                   <Room  style={{marginRight:"10px"}}/>
                    AlFalahStreet
                </ContactItem>
                {/* <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" /> */}
            </Right>
        </Container>
      
    )
}
export default Footer;
