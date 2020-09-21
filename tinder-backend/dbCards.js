const mongoose = require('mongoose');

const cardsSchema = mongoose.Schema({
    name: String,
    imageUrl:String
})


mongoose.model('Cards', cardsSchema);