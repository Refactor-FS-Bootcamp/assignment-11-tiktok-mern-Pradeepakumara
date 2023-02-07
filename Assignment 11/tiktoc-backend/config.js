import mongoose from "mongoose";

const url_connection = "mongodb+srv://pradeep_dev:pradeep_dev@cluster0.flks18f.mongodb.net/tik-tok?retryWrites=true&w=majority";

mongoose.set('strictQuery', true);

mongoose.connect(url_connection);