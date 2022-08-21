require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts')




//express appp
const app = express()


// middleware

app.use(express.json())

//routes

app.use('/api/workouts', workoutRoutes)


//connect to db


const port = process.env.PORT;

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(port, () => {
            //listen for request
            console.log('connecting to DB & listening on port', port);
        });
    })
    .catch((error) => {
        console.log(error)
    })



