import express from 'express';
import bodyParser from 'body-parser'
import mongoose from 'mongoose';
import Post from "./model/post.js";

//mongodb+srv://<db_username>:<db_password>@cluster0.fefq9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
//mongodb+srv://abmirza:H4e8cTHwZWMyHAxT@cluster0.fefq9.mongodb.net/mean_app?retryWrites=true&w=majority&appName=Cluster0
//abmirza H4e8cTHwZWMyHAxT

mongoose.connect(process.env.MongoDB)
    .then( () => {
        console.log('Connected to MongoDB');
    }).catch(()=>{
        console.log('Error connecting to MongoDB');
})
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.setHeader(
        'Access-Control-Allow-Methods',
        ' GET, POST, PATCH, DELETE, OPTIONS',
    );
    next();
})

app.post('/api/posts', (req, res, next) => {

    const post = new Post(
        {
            title: req.body.title,
            content: req.body.content,
        }
    );

    console.log(post);
    post.save();
    res.status(201).json(
        {success:true}
    );
})

app.get('/api/posts',(req, res) => {
    const posts =[
        {id:'id1', title:'first server side title', content:'First server side title'},
        {id:'id2', title:'second server side title', content:'second server side title'},
        {id:'id3', title:'third server side title', content:'third server side title'}
    ]
    res.status(200).json({success: true, data: posts});

})

export default app;