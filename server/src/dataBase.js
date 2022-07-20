import mongoose from "mongoose";
import config from "./config";

// conectamos nuestra base de datos
(async()=>{
    try {
        
        const db = await mongoose.connect(`mongodb://${config.MONGO_HOST}/${config.MONGO_DATABASE}`);
    console.log('conectada la db', db.connection.name)
    } catch (error) {
        console.error(error)
    }
})()