// set up app
const express = require('express');
const bodyParser = require('body-parser')
const logger = require('morgan') // create log file
const bcrypt = require('bcrypt')
const cors = require('cors')
const app = express()

// controller
const routes = require('./index-routes')
const mongoose = require('mongoose')
const url = process.env.CONEECTION_URL;
const _PORT = 3000


//  middelware 
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))
// app.use(cors())
app.use(logger('log'))

app.use('/api', routes)


//db Connection and config


const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}
mongoose.connect(url, connectionParams).then(() => {
    console.log('Connected to database ')
    app.listen(_PORT, () => {
        console.log(`server run on port ${_PORT}`);
    })
})
    .catch((err) => {
        console.error(`Error connecting to the database. \n${err}`);
    })

