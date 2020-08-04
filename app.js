import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
require('dotenv').config();

const app = express();

app.use(cors());

const connectMongo = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        });
        console.log('MongoDB connected');
    }
    catch (error) {
        console.log(error.message);
        process.exit(1);
    };
};

connectMongo();

export default app;