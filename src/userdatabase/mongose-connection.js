const mongoose = require('mongoose')
const users_collection1 = require('./userdata')

mongoose.connect('mongodb://localhost:27017/userdataC')
.then(()=>{console.log('mongo connection succesfully')})
.catch((err)=>{console.log(err)})