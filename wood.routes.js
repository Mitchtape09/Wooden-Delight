const WoodController = require('../controllers/wood.controller')

module.exports = (app) => {
    //Test
    app.get("/api/test", WoodController.testApi)

    // //Display all
    app.get("/api/woods", WoodController.allWoods)
    // //Create one
    app.post("/api/woods", WoodController.addWood)
    // //Display one
    app.get("/api/woods/:id", WoodController.oneWood)
    // //Update one
    app.put("/api/wood/:id", WoodController.updateWood)
    // //Delete one
    app.delete("/api/wood/:id", WoodController.deleteWood)
    // //Customer view
    app.get("/api/products", WoodController.allProducts)
    // //Chat bot
    app.get("/api/chat", WoodController.chatBot)
    // //Send an email
    app.get("/api/email", WoodController.sendEmail)

}