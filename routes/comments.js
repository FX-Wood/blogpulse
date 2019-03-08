const express = require('express')
const db = require('../models');
const router = express.Router()

router.post('/', (req,res) => {
    db.comment.create({
        name: req.body.name,
        content: req.body.content,
        postId: req.body.postId
    }).then(data => {
        res.redirect('/posts/' + req.body.postId)
    }).catch(function(error) {
        res.render('main/error',error)
    })
})

module.exports = router;