const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const categoryUrls = require('./routes/categoryRoutes');
const exerciseUrls = require('./routes/exerciseRoutes');
const cors = require('cors');

dotenv.config()

mongoose.connect(process.env.DATABASE_ACCESS, () => console.log("database connect"))

app.use(express.json())
app.use(cors())

//routes
app.use('/', categoryUrls)
app.use('/', exerciseUrls)


app.listen(4000, () => console.log("server run"))