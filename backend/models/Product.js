import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    
    name:{
        type: String,
       
    },
    img: {
        type: String,
        
    },
    description: {
        type: String,
       
    },
    category:{
        type:String,
       
    },
    price:{
        type:String,
        
    }
});

const Product = mongoose.model('product', productSchema);

export default Product;
});

