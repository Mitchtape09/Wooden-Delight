//Import our dependencies
const express = require("express");
const cors = require("cors");

const app = express()

const port = 8001;

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors());
require('./config/mongoose.config')

const Routes = require("./routes/wood.routes")
Routes(app)


app.listen(port, () => console.log(`Welcome to wood turner's paradise. You're at ${port}`))