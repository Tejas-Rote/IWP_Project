const express = require('express')
const app = express();
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const routeUrls = require('./routes/route')
const cors = require('cors')

dotenv.config()

mongoose.connect(process.env.DATABASE_ACCESS, () => console.log("Databse connected"))

// body parser
app.use(express.json())
app.use(cors())
// connect route and server
app.use('/app', routeUrls)

app.listen(4000, () => console.log("server is up and running"));
