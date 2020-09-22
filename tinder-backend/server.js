// import express from "express";
const express = require('express');
const Cors = require('cors');

// import mongoose from "mongoose";

const mongoose = require('mongoose');

// import Cards from "./dbCards.js";
const Cards = require("../tinder-backend/dbCards");


const app = express()
const port = process.env.PORT || 8002

const connection_url =`mongodb+srv://admin:krishna45@cluster0.snqyb.mongodb.net/tinderdb?retryWrites=true&w=majority`

//middlewares

app.use(express.json());
app.use(Cors());

mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});


app.post('/tinder/cards', (req, res) => {
    const dbcard = req.body;

    Cards.create(dbcard, (error, data) => {
        if (error) {
            res.status(500).send(error);
        } else {
            res.status(201).send(data);
        }
    })
});


app.get('/tinder/cards', (req, res) => {
    Cards.find((error, data) => {
        if (error) {
            res.status(500).send(error);
        } else {
            res.status(200).send(data);
        }
    })
})


app.get('/', (req, res) => res.status(200).send('Hellow world'));

app.listen(port, () => console.log(`app is listening on localhost:${port}`));
