const mongooes = require('mongoose');
//schema define 

const userSchema=new mongooes.Schema({
    name:String,
    email:String,
    password:String
})

module.exports = mongooes.model("users" , userSchema);