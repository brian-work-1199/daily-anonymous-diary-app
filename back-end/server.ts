import express from 'express';
import cors from 'cors';
import postRoutes from './routes/posts';
import morgan from 'morgan';
import {errorHandler} from './exceptions/error-handler';
import { noRoute } from './controllers/route-controller';
import dotenv from 'dotenv';

dotenv.config();
//init
const app = express();
const PORT = process.env.PORT;

//middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use('/api/posts', postRoutes);

// routers
app.all('*', noRoute);

// error handlers
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));