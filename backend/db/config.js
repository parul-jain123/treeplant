import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = () => {
    const uri ='mongodb://127.0.0.1:27017' ;

    if (!uri) {
        console.error('MongoDB URI is undefined. Check your .env file.');
        process.exit(1);
    }

    mongoose
        .connect('mongodb://127.0.0.1:27017', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(() => console.log('Database connected'))
        .catch((error) => {
            console.error('Error connecting to the database:', error.message);
            process.exit(1);
        });
};

export default connectDB;

