const Product = require("../models/Product");
const { verifyToken, verifyTokenandAuth, verifyTokenandAdmin } = require("./verifyToken");


 const router = require("express").Router();

router.post("/" , verifyTokenandAdmin , async(req,res)=>{
    const newProduct = new Product(req.body);
    try{
const savedProduct = await newProduct.save();
res.status(200).json(savedProduct);
    }
    catch(err){
        res.status(500).json(err);
    }
})


router.put("/:id" , verifyTokenandAdmin ,async (req,res)=>{
   

try{
    const updateProduct = await Product.findByIdAndUpdate(req.params.id , {
        $set : req.body
    } , {new :true});
    res.status(200).json(updateProduct);
}catch (err){
    res.status(500).json(err);
}
});
// //Delete User
router.delete("/:id" , verifyTokenandAdmin , async(req,res)=>{
    try{
await Product.findByIdAndDelete(req.params.id);
res.status(200).json("User Is Delted")
    }catch(err){
       res.status(500).json(err); 
    }
});
// //Find User
router.get("/find/:id" , async(req,res)=>{
    try{
const product= await Product.findById(req.params.id);

res.status(200).json(product);
    }catch(err){
       res.status(500).json(err); 
    }
});
// //Find All products
router.get("/" , async(req,res)=>{
    const qNew = req.query.new;
    const qCat = req.query.category;
    try{
        let products;
        if(qNew){
            products = await Product.find().sort({createdAt : -1}).limit(1);
        }
        else if(qCat){
            products = await Product.find({
            categories: {
                $in :[qCat],
            },
        }); }
        else {
          products = await Product.find() ; 
        }

res.status(200).json(products);
    }catch(err){
       res.status(500).json(err); 
    }
});



module.exports = router ;