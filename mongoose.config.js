const mongoose = require("mongoose")

// const database = "WoodturningProject"

mongoose.connect("mongodb+srv://dbadmin:ILe93LWqlQiLWS1y@cluster0.i9xirvy.mongodb.net/?retryWrites=true&w=majority", {
    dbName: "SuperCoolStuff",
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log(`wood turning data commlink on`))
.catch((err) => console.log("Something is wrong!!!!", err))




// fun password 
//ILe93LWqlQiLWS1y

// fun link for mongoose.config.js
// mongodb+srv://dbadmin:<password>@cluster0.i9xirvy.mongodb.net/?retryWrites=true&w=majority