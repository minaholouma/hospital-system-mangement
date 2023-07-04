const express = require('express')
const router = express.Router()
const ourservices = require('../models/ourServices')

router.get('/', function (req, res) {

    ourservices.find({}, (err, data) => {
        if (err) {
            res.status(400).send(err)
        } else {
            res.status(200).send(data)
        }
    })

})
router.post('/',function(req,res){

    ourservices.create(req.body,(err , data)=>{
        if(err){res.status(400).send(err)}
        else{res.status(200).send(data)}
    })
    
})

module.exports = router