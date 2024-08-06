import mongoose from 'mongoose';


const MONGO_URI = 'mongodb://localhost:27017/ADIT';
const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI); 
        console.log('MongoDB Connected');
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
}
export default connectDB;