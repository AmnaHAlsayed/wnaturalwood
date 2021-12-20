import axios from 'axios';
import React ,{useState , useEffect}from 'react'
import { useLocation } from 'react-router';
import styled from 'styled-components';
import { populerproducts } from './data';
import Product from './Product';
import { mobile } from '../../responsive';


const Container = styled.div`
padding:20px;
display:flex;
flex-wrap:wrap;
justify-content:space-between
margin:20px;
${mobile({width:"50%"})};
`
const Image = styled.div`
width:500px;
height:50;`
const Products =({cat , filter , sort})=> {
   
    const [products,setProducts]=useState([]);
    const [filterProduct , setfilterProduct]=useState([]);
useEffect(() => {
 const getProducts = async ()=>{
     try{
         const res = await axios.get( cat ?`http://localhost:5000/api/products?category=${cat}` : "http://localhost:5000/api/products/"
         );
         console.log(res);
         setProducts(res.data);
     }
     catch(err){
     console.log(err);
     }
     
 }
 getProducts()
    
}, [cat]);
useEffect(() => {
    cat && setfilterProduct(
        products.filter((item)=> Object.entries(filter).every(([key,value])=>
            item[key].includes(value)
            )
            )
            );
 
}, [products,cat,filter]);

useEffect(() => {
    if(sort === "price"){
setfilterProduct(prev=>
    [...prev].sort((a,b)=>a.createdAt - b.createdAt)
);}
    else   if(sort === "asc"){
        setfilterProduct(prev=>
            [...prev].sort((a,b)=>a.price - b.price)
        );
            }else  if(sort === "desc") {
                setfilterProduct(prev=>
                    [...prev].sort((a,b)=>b.price - a.price)
                );
                    }
   
    
}, [sort]);
    return (
      <Container>
          {/* these use to show all pproducts */}
  {/* {populerproducts.map((item)=>(
        <Product item={item} key={item.id}/> ))} */}
        {/* these use for show filterd product */}
       { cat ? filterProduct.map((item)=>
        <Product item={item} key={item.id} />) :
        products.map((item)=>(
            <Product item={item} key={item.id}/> ))
    }
     </Container>
    )
}
export default Products
