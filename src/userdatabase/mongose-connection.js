const mongoose = require('mongoose')
const users_collection1 = require('./userdata')

mongoose.connect('mongodb+srv://shivgup000:shiv19000@cluster0.pwqhnca.mongodb.net/userDB')
.then(()=>{console.log('mongo connection succesfully')})
.catch((err)=>{console.log(err)})