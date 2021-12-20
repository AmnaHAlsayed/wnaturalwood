import { Link ,useLocation} from "react-router-dom";
import "./product.css";
import Chart from "../../components/chart/Chart"
import {productData} from "../../dummyData"
import { Publish } from "@material-ui/icons";
import { useSelector , useDispatch} from "react-redux";
import { updateProduct } from "../../redux/apiCalls";


export default function Product() {
    const location = useLocation();
    const productId=location.pathname.split("/")[2];
    const product = useSelector((state) =>
    state.product.products.find((product) => product._id === productId));
    const dispatch = useDispatch();
        
    const handleUpdate = (id ,product) => {
        updateProduct(id, product,dispatch);
       };
     
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to="/newproduct">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
          <div className="productTopLeft">
              <Chart data={productData} dataKey="Sales" title="Sales Performance"/>
          </div>
          <div className="productTopRight">
          <div className="productInfoTop">
            <img src={product.img} alt="" className="productInfoImg" />
            <span className="productName">{product.title}</span>
          </div>
              <div className="productInfoBottom">
                  <div className="productInfoItem">
                      <span className="productInfoKey">id:</span>
                      <span className="productInfoValue">{product._id}</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">Price</span>
                      <span className="productInfoValue">{product.price}</span>
                  </div>
                
                  <div className="productInfoItem">
                      <span className="productInfoKey">in stock:</span>
                      <span className="productInfoValue">{product.inStock}</span>
                  </div>
              </div>
          </div>
      </div>
      <div className="productBottom">
          <form className="productForm">
              <div className="productFormLeft">
                  <label>Title</label>
                  <input type="text" placeholder={product.title} />
                  <label>Description</label>
                  <input type="textarea" placeholder={product.desc} />
                  <label>price</label>
                  <input type="text" placeholder={product.price} />
                  <label>In Stock</label>
                  <select name="inStock" id="idStock">
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                  </select>
              
              </div>
              <div className="productFormRight">
                  <div className="productUpload">
                      <img src={product.img}  alt=""/>
                      <label for="file">
                          <Publish/>
                      </label>
                      <input type="file" id="file" style={{display:"none"}} />
                  </div>
                  <button className="productButton" onclick={handleUpdate}>Update</button>
              </div>
          </form>
      </div>
    </div>
  );
}
