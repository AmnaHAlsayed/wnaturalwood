import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar';
import ProductList from './pages/productList/Product'
import {BrowserRouter as Router ,Route}from 'react-router-dom';
function App() {
  return (
   <Router>
     <div >
     
       <Route path="/products" ><ProductList/></Route>
     </div>
   </Router>
  );
}

export default App;
