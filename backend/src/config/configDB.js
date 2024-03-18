

import mongoose from "mongoose";
import { MONGOD_DB } from "./config-env.js";
export const mongoDBConnected = async () => {
    try {
        await mongoose.connect(MONGOD_DB, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('mongodb Connected');
    } catch (error) {
        console.log(`Database is not connected,${error}`);
    }
}