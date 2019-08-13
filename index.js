import express from 'express';
import botRouter from './router/bot-router';
var app = express()

app.use('/bot', botRouter)
const PORT = process.env.PORT || 3000
app.listen(PORT, console.log(`runnung at port ${PORT}`))