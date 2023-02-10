const mongoose = require("mongoose")


//Create database table (called collections in MongoDB) 
const WoodSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required"],
        minlength: [5, "Title must be 3 characters long"],
        maxlength: [35, "Title max is 35 characters long"]
    },
    image: {
        type: String,
        require: [false],
    },
    buy: {
        type: String,
        required: [true, "Image is required"],
        minlength: [3, "Image alt must be 3 characters long"]
    },
    price: {
        type: Number,
        min: [1, "Rating must be greater than zero"],
        max: [500, "No more than 500"]
    },
    description: {
        type: String,
        required: [true, "Description is required"],
        minlength: [5, "Description must be 5 characters long"]
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        minlength: [5, "Email must be 5 characters long"]
    },
    shipping: {
        type: Boolean,
        require: [false]
    },
}, {timestamps: true})

module.exports = mongoose.model('Song', WoodSchema)