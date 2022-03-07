import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import {createConnection} from 'typeorm';
import 'reflect-metadata';

dotenv.config();

createConnection()
    .then(() => console.log('Database connected...'))
    .catch((err) => console.log('Error: ', err));

export const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log('App running in port : ', PORT);
});
