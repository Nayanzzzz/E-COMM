const mongooes = require('mongoose');
//schema define 

const productSchema=new mongooes.Schema({
    name:String,
    price:String,
    category:String,
    userId:String,
    company:String
})

module.exports = mongooes.model("products" , productSchema);