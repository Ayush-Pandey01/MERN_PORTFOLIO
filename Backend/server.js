const express =require('express');
const app = express();
const cors = require('cors');
require("dotenv").config();
const dbConfig = require('./config/dbConfig.js');
const portfolioRoute = require('./routes/portfolioRoutes.js');
app.use(express.json());

app.use(cors())

app.use('/api/portfolio',portfolioRoute);

const port = process.env.PORT || 4000
const path =require('path');

app.listen(port,()=>{
    console.log(`Server is listining on Port ${port}`);
})
