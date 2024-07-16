const mongoose = require('mongoose')
mongoose.connect(process.env.mongo_url )

const connection = mongoose.connection;


connection.on("error",()=>{
    console.log("Error While connecting the database")
});
connection.on("connected",()=>{
    console.log("connected the database sucess")
});
module.exports = connection;