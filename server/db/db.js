import mongoose from "mongoose";
import dotenv from 'dotenv';



dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;


 const Connection=()=>{

    const MONGODB_URI = `mongodb+srv://${USERNAME}:${PASSWORD}@nodedatabase.etskqix.mongodb.net/?retryWrites=true&w=majority`;

    // const MONGODB_URI = `mongodb://localhost:27017`


    mongoose.connect(MONGODB_URI, {useNewUrlParser: true});

    mongoose.connection.on('connected',()=>{
        console.log("DB connected");
    })

    mongoose.connection.on('disconnected',() => {
        console.log('Db Disconnected');
    })
    mongoose.connection.on('error',()=>{
        console.log("Error while connecting to db", error.message);


    })
}

export default Connection;