import express from 'express';
import cors from 'cors';
import { json } from 'express';
import userRoutes from './modules/user/user.routes';
// import userRoutes from './modules/user/user.routes';
// import transactionRoutes from './modules/transaction/transaction.routes';

export const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(json());

app.get('/', (_, res) => res.send('FinLogging API is running 🪙'));

app.use('/api/users', userRoutes);
// app.use('/api/transactions', transactionRoutes);



app.use(express.json());
app.use('/users', userRoutes);