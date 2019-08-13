import express from 'express';
import botRouter from './router/bot-router';
import bodyParser from 'body-parser';

var app = express()
app.use(bodyParser.json())
app.use('/bot', botRouter)
const PORT = process.env.PORT || 3000
app.listen(PORT, console.log(`runnung at port ${PORT}`))