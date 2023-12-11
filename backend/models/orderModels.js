import  mongoose from "mongoose"

const orderModels =new mongoose.Schema({
    userId:{
        type:String,
        required:true
    },
    products:[{
        productId : {
            type:String,
            required:true
        },
        quantity:{
            type:Number,
            default:1
        },
    },        
    ],
    amount:{
        type:Number,
        required:true
    },
    address:{
        type:Object,
        required:true
    },
    status:{
        type:String,
        required:true
    },

},
{
    timestamps: true
});

const Orders = mongoose.model("Order",orderModels);

export default Orders