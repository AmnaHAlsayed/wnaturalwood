const express= require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const userRoute = require("./routes/user-routes");
const authRoute = require("./routes/auth-routes");
const productRoute  = require("./routes/product-routes");
const orderRoute  = require("./routes/order-routes");
const cartRoute  = require("./routes/cart-routes");
const cors = require("cors");
const stripeRoute = require("./routes/stripe");
const cookieSession = require("cookie-session");
const passport=require("passport");
const passportSetup = require("./passport");
const path = require('path');
const { options } = require("./routes/user-routes");
dotenv.config();
mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log("ConectedSuccessfully"))
.catch((err)=>{console.log(err)});

app.use(cookieSession({name:"session", keys:["Amna"], maxAge:24*60*60*100}));
app.use(passport.initialize());
app.use(passport.session());
// const corseOption={
//     origin:'http://naturalwooduae.com',
//     optionsSuccessStatus:200
// }
app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// app.use((req,res,next)=>{
//     res.setHeader('Access-Control-Allow-Origin','*');
//     res.setHeader(    'Access-Control-Allow-Headers',
//     'Origin, X-Requested-With, Content-Type, Accept, Authorization');
//     res.setHeader('Access-Control-Allow-Methods','GET , POST , PATCH , DELETE');
    
//   next();
// });
    
app.use("/api/user" , userRoute);
app.use("/api/auth" , authRoute);
app.use("/api/products" , productRoute);
app.use("/api/cart" , cartRoute);
app.use("/api/orders" , orderRoute);
app.use("/api/stripe" , stripeRoute);


const port = process.env.PORT || 5000;



app.listen(port, () => console.log("Itd work"));