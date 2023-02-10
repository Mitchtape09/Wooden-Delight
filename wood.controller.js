const Wood = require("../models/wood.model")


//testApi

module.exports.testApi = (req, res) => {
    res.json({status: 'Im looking good with some wood.'})
}


//addWood

module.exports.addWood = (req, res) => {
    const newWood = req.body
    Wood.create(newWood)
    .then(wood => res.json(wood))
    //response.status(400).json(err)
    .catch(err => res.status(400).json(err))
}


//allWoods

module.exports.allWoods = (req,res) => {
    Wood.find()
    .then(woods => res.json(woods))
    .catch(err => res.json(err))
}


//oneWood

module.exports.oneWood = (req, res) => {
    const idFromParams = req.params.id
    Wood.findOne({_id:idFromParams})
    .then(onewood => res.json(onewood))
    .catch(err => res.json(err))
}


//updateWood

module.exports.updateWood = (req,res) => {
    const idFromParams = req.params.id
    const newValue = req.body
    Wood.findOneAndUpdate({_id: idFromParams}, newValue, {new: true})
    .then(updatedValue => res.json(updatedValue))
    .catch(err => res.json(err))
}


//deleteWood

module.exports.deleteWood = (req, res) => {
    Wood.deleteOne({_id: req.params.id})
    .then(message => res.json(message))
    .catch(err => res.json(err))
}

//allProducts

module.exports.allProducts = (req,res) => {
    Wood.find()
    .then(woods => res.json(woods))
    .catch(err => res.json(err))
}

//chatbot

module.exports.chatBot = (req,res) => {

}

//send an email

module.exports.sendEmail = (req,res) => {

}

