import React from 'react';
import  styled  from "styled-components";
import { categories } from './data';
import CategoriesItems from './CategoriesItems';
import { mobile } from '../../responsive';
const Container = styled.div`
display:flex;
justify-content:space-between;
padding:25px;
${mobile({padding:"0px" , flexDirection:"column"})};`

const Categories =()=>{
return(<Container>
    {categories.map((item)=>(
        <CategoriesItems item={item} key={item.id}/>
    ))}
</Container>)
};
export default Categories;