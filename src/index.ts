import express from 'express';
import config from './config'
import mongoose from 'mongoose';
import cors from 'cors'
import apartmentRoutes from './routes/apartmentRoute';
const app = express();

mongoose.connect(config.databaseURL)
const db = mongoose.connection;

db.on('error', (error) => {
  console.error(`MongoDB connection error: ${error}`);
});
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "YOUR-DOMAIN.TLD"); 
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(cors())
app.use(express.json())

app.use('/api', apartmentRoutes)

export default app