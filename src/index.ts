import express from 'express';
import  config  from './config'
import mongoose from 'mongoose';
import cors from 'cors'
import apartmentRoutes from './routes/apartmentRoute';
const app = express();

mongoose.connect(config.databaseURL)
const db = mongoose.connection;

db.on('error', (error) => {
  console.error(`MongoDB connection error: ${error}`);
});

app.use(express.json())

app.use(cors())
app.use('/api', apartmentRoutes)

export default app