const mongoose = require('mongoose');

const cardsSchema = mongoose.Schema({
    name: String,
    imgUrl:String
})


const Cards = mongoose.model('Cards', cardsSchema);
module.exports = Cards;
