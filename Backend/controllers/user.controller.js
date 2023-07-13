const express = require('express')
const user = require('../models/user.Model')
const router = express.Router()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const auth = require("../middlewares/Auth.middleware");

// get all  

router.get('/', async (req, res) => {
    user.find({
        isAdmin: false
    }, (err, data) => {

        if (!err) {
            res.status(200).send(data)

        } else {
            res.status(400).send(err)
        }
    })
})
// get
router.get('/:userId', async (req, res) => {

    const id = req.body._id;
    console.log(id)
    user.findById(id, (err, data) => {

        if (!err) {
            res.status(200).send(data)

        } else {
            res.status(400).send(err)
        }
    })

})
router.post('/login', async (req, res) => {
    console.log(req.body);
    const body = {
        email: req.body.email,
        password: req.body.password
    }

    const isAdmin = await user.findOne({
        email: body.email
    })

    if (isAdmin) {
        console.log(isAdmin);
        // check user password with hashed password stored in the database
        const validPassword = await bcrypt.compare(body.password, isAdmin.password);
        if (validPassword) {
            if (isAdmin.role === 'admin') {
                const token = await jwt.sign({
                    userId: isAdmin._id,
                    email: body.email
                },
                    process.env.TOKEN_KEY, {
                    expiresIn: "2h",
                }
                );
                // save user token
                isAdmin.token = token;
                res.status(200).send(isAdmin);
            } else {

                res.status(401).json({
                    error: "User does have a premition to this page"
                });
            }

        } else {
            res.status(400).json({
                error: "Invalid Password"
            });
        }
    } else {
        res.status(401).json({
            error: "User does not exist"
        });
    }

})

//add 
router.post('/register', async (req, res) => {
    console.log('first step , ', req.body);
    try {
        console.log('first try 1');
        const body = req.body
        body.password = await bcrypt.hash(body.password, 10)
        body.email = body.email.toLowerCase();

        const oldAdmin = await user.findOne({
            email: body.email
        });

        console.log('oldAdmin -------> ', oldAdmin)

        if (oldAdmin) {
            alert('this is old user ')
            console.log(oldAdmin)
            res.status(401).send({code: 400, message: 'user Already exist , please login'})
        }

        console.log('After psdd sll step');

        const newAdmin = await user.create(body);
        console.log('Stored user suess , ', newAdmin)
        res.status(200).send({newAdmin, status: 'success'})
    } catch (error) {
        res.status(400).send(error)
        console.log('from catch')
    }


})
//update 
router.put('/:userId', async (req, res) => {
    const id = req.params.userId;
    const body = req.body
    user.findByIdAndUpdate(id, {
        $set: body
    }, (err, data) => {

        if (!err) {
            res.status(200).send(data)

        } else {
            res.status(400).send(err)
        }
    })
})

//remove with 
router.delete('/:userId', async (req, res) => {
    const id = req.params.userId;
    const body = req.body
    user.findOneAndDelete(id, (err, data) => {

        if (!err) {
            res.status(200).send(data)

        } else {
            res.status(400).send(err)
        }
    })
})
//remove all
router.delete('/:user', async (req, res) => { })
//filter

module.exports = router;