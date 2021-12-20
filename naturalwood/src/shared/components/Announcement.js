import React  from 'react';
import styled from 'styled-components';



const Container = styled.div`
height:30px;
background-color:#501b1d;
color:white;
text-align: center;

font-size:14px;
font-weight:500px;

`
const Announcement =()=>{
    return(
        <Container>Super Deal</Container>
    )
};

export default Announcement;