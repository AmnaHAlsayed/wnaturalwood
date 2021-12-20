import React from 'react';
import Announcement from '../shared/components/Announcement';
import Categories from '../shared/components/Categories';
import Navbar from '../shared/components/Navbar';
import NewsLetter from '../shared/components/NewsLetter';
import Products from '../shared/components/Products';
import Slider from '../shared/components/Slider'

const Hom =()=>{
 return <div>
     
<Slider/>
<Categories/>
<Products/>

<NewsLetter/>
 </div>

    
};

export default Hom;