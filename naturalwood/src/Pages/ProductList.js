import React , {useState} from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'
import { useLocation } from 'react-router'
import Products from '../shared/components/Products'
import {useSelector} from 'react-redux';
const Container = styled.div`
`
const FilterContainer = 
styled.div`
display:flex;
justify-content:space-between`
const Title = styled.h2`
margin:20px;
`
const Filter = styled.div`
margin:20px;
${mobile({width:"0px 20px" , display:"flex" , flexDirection:"column"})};`

const FilterText = styled.span`
font-size:20px;
font-weight:600;
${mobile({marginRight:"0px" , fontSize:"15px"})};
`
const Select = styled.select`
padding:10px;
margin:20px;
${mobile({margin:"10px 0px"})};`
const Option = styled.option``
const ProductList=()=> {
    const  user = useSelector(state => state.user.currentUser)
    const location = useLocation();
    const  cat =location.pathname.split("/")[2];
  const [filter, setFilter] = useState({});
  const [sort ,setSort]=  useState({});
  const handelFilters = (e)=>{
      const value = e.target.value;
      setFilter({
          ...filter,
          [e.target.name]:value ,
      });
  };

    return (
    <Container>
        <Title>{cat}</Title>
     { user&&  (<FilterContainer>
            
            <Filter>
               {/*  <FilterText>Product Price</FilterText>
            <Select  onChange={(e) => setSort(e.target.value)}>
                <Option value="price" >Price</Option>
            <Option vlaue="desc">less than 100Dhs (asc)</Option>
            <Option value="asc">more than 100Dhs(desc)</Option>
           </Select></Filter>
            <Filter><FilterText>Product Size</FilterText>
            <Select name="size" onChange={handelFilters}><Option disabled >Size</Option>
            <Option>small</Option>
            <Option>meduim</Option>
            <Option>large</Option>
           </Select> */}
           </Filter>
        </FilterContainer>)}
        <Products cat={cat} filter={filter} sort={sort}/>
    </Container>
    )
}

export default ProductList;