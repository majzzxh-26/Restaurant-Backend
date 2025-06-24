import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import dbConnection from './database/dbConnection.js';
import router from './routes/Route.js';
import errorMiddleware from './middlewares/errorMiddleware.js'; // New handler

dotenv.config({ path: './config/config.env' });

const app = express();

// Middlewares
app.use(cors({
  origin: [process.env.FRONTEND_URL],
  methods: ['POST'],
  credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/api/v1/reservation', router);

dbConnection();





app.listen(process.env.PORT, () => {
  console.log(`🚀 Server Running On Port ${process.env.PORT}`);
});
app.use(errorMiddleware);
