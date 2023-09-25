const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    title : {type : String},
    explantion : {type : String},
    gender : {type : String},
    brand : {type : String},
    color : {type : String},
    size : {type : [String]},
    image : {type : [String] }

})

const Product = new mongoose.model('Product', productSchema)
module.exports = Product