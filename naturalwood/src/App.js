
import {useState }from 'react';
import { BrowserRouter as Router ,Routes, Redirect, Route ,Switch} from 'react-router-dom';
import './App.css';
import Cart from './Pages/Cart';
import Hom from './Pages/Hom';
import Login from './Pages/Login';
import Product from './Pages/Product';
import ProductList from './Pages/ProductList';
import Register from './Pages/Register';
import Announcement from './shared/components/Announcement';
import Footer from './shared/components/Footer';
import Navbar from './shared/components/Navbar';
import Success from './Pages/Success';
import {useSelector} from 'react-redux';


import Logout from './Pages/Logout';

function App() {




const user = useSelector((state) => state.user.currentUser);
  return (
 
<Router>
  
      <Navbar />
   <Switch>
   
 
    <Route path="/" exact>  <Hom /></Route>
    <Route path="/product" exact>  <Product /></Route>
    <Route path="/cart" exact>  < Cart/></Route>
    <Route path="/products/:category" exact>  <ProductList /></Route>
    <Route path="/products"><ProductList/></Route>
   
    <Route path="/product/:id" exact>  <Product /></Route>
    <Route path="/success" exact>
          <Success />
        </Route>
       
        <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
        <Route path="/register">
        {user ? <Redirect to="/" /> : <Register />}
        </Route>
 
 </Switch>
    <Footer/>
    </Router>


 
  );
}

export default App;
