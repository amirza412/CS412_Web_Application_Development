import express from 'express';
import User from '../model/user.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import user from "../model/user.js";

const router = express.Router();

router.post('/signup', (req, res, next) => {
    bcrypt.hash(req.body.password, 10)
        .then((hash) => {
            const user = new User({
                email: req.body.email,
                password: hash,
            })
            user.save().then(result => {
                res.status(201).json({
                    success: true,
                    data: result
                })
            }).catch(error => {
                if (error.code === 11000) {
                    res.status(500).json({
                        success: false,
                        data: "User already exists",
                    });

                } else {
                    console.log('Error saving', error);
                    res.status(500).json({
                        success: false,
                        data: error,
                    })
                }
            })
        })
})

router.post('/login', (req, res, next) => {
    User.findOne({email: req.body.email})
        .then(user => {
            if (!user) {
                return res.status(401).json({
                    success: false,
                    data: 'User not found',
                })
            }
            return bcrypt.compare(req.body.password, user.password)
        }).then(result => {
        if (!result) {
            return res.status(401).json({
                success: false,
                data: "Wrong email or password",
            })
        }

        const token = jwt.sign({
            email: req.body.email,
            userId: req.body.password
        }, process.env.Secret_Key,
            {expiresIn: '1h'});
        res.status(200).json({
            success: true,
            token: token,
            expiresIn: 3600
        })
    }).catch(err => {
        console.log(err);
    })

});


export default router;