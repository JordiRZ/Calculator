import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';

import userRoutes from './routes/userRoutes.js';
import operationRoutes from './routes/operationRoutes.js';

const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/calculator', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use('/api/users', userRoutes);
app.use('/api/operations', operationRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});