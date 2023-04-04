import express from 'express'
const app = express()
import route from './api/routes/index.js'
import mongoose from 'mongoose'
import bodyParser  from 'body-parser'
import cors from 'cors'
const port = 3000

app.use(cors())
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

//mongoose
mongoose.connect('mongodb://localhost/mica')

app.get('/',(req,res)=>{
    res.send('hello')
})

route(app)
app.listen(port,()=>{console.log(`listen in ${port} !!!`)})