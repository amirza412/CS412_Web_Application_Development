import express from 'express';
import bodyParser from 'body-parser'
import mongoose from 'mongoose';
import Post from "./model/post.js";
import postRoutes from './routes/post.js';
import userRoutes from './routes/user.js';

mongoose.connect(process.env.MongoDB)
    .then(() => {
        console.log('Connected to MongoDB');
    }).catch(() => {
    console.log('Error connecting to MongoDB');
})
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    res.setHeader(
        'Access-Control-Allow-Methods',
        ' GET, POST, PATCH, PUT, DELETE, OPTIONS',
    );
    next();
})

app.use('/api/posts', postRoutes);
app.use('/api/user', userRoutes);



export default app;