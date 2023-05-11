const express = require('express')
const axios = require('axios')
const cors = require('cors')
const app = express()

const mangaRouter = require('./routes/manga')

app.use(cors())

app.use('/manga', mangaRouter)

app.listen(5000, () => { console.log("listening on 5000") })