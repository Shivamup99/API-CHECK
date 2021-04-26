const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config()

const database = async()=>{
  await mongoose.connect(process.env.DB_URL ,{useFindAndModify:false,useCreateIndex:true,useNewUrlParser:true,useUnifiedTopology:true});
  console.log('conected')
} 

module.exports = database