const express = require("express");
const cors = require('cors');
const mongoose = require('mongoose')

const app = express();
require("dotenv").config();

mongoose.connect(process.env.MONGO_DB, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
}).then(() => {
    console.log("Connected to the database !")
}).catch((err) => {
    console.log(err.message);
})

app.use(cors());
app.use(express.json());

const server = app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});