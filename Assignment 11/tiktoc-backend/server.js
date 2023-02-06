import mongoose from "mongoose";
import express from 'express';
import Cors from 'cors'
import ReelsModel from './tiktokDB.js'
import './config.js'

//App Configuration
const app = express();


// Middleware
app.use(express.json());
app.use(Cors())

// Api endpoint
app.get("/", (req, resp) =>{
    resp.send("<h1>Welcomt to TikTok</h1>");
})

app.post('/insert', async (req, resp) =>{
    let data = new ReelsModel(req.body);
    let result = await data.save();
    resp.send(result);
})

app.get('/reels/data', async (req, resp) =>{
    let data = await ReelsModel.find();
    resp.send(data)
})


app.listen(5000)
