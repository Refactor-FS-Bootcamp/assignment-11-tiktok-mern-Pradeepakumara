import mongoose from "mongoose";

const url_connection = "mongodb+srv://<username>:<password>@cluster0.flks18f.mongodb.net/tik-tok?retryWrites=true&w=majority";
// I removed my username and password because it is my local database
// please copy and paste data to database 
// please read text file, it has all data

mongoose.set('strictQuery', true);

mongoose.connect(url_connection);