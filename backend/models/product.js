const mongoose = require('mongoose')

const {Schema} = mongoose

const productSchema = new Schema({
    name:{
        type : String,
        required : true,

    },
    color:{
        type : String,
        required : true,
        default: "Customization"
    },
    category:{
        type : String,
        default:"All prurpose"
    },
    tags:{
        type: Array,

    },
    price:{
        type : Number,
        required: true,
        default: 999

    },
    voltage:{
        type : String,
       
    },
    mah:{
        type : Number,
    },
    design:{
        type : String,
    },
    compartments:{
        type : String,
    },
    description:{
        type : String,
    },
    path:{
        type : String,
    }
})

module.exports = mongoose.model('products_schema',productSchema)