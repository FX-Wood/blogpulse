const express = require('express');
const db = require('../models');
const router = express.Router();

router.get('/:name', function(req,res) {
    db.tag.findOne({
        where: {name: req.params.name}
    }).then(tag => {
        tag.getPosts().then(function(posts) {
            res.render('tags/show', {tag, posts})
        });
    });
});


router.post('/', function(req,res) {
    db.post.findById(req.body.postId)
    .then(post => {
        db.findOrCreate({
            where: {name: req.body.name}
        }).spread((tag, created) => {
            post.addTag(tag).then(tag => {
                res.redirect('/posts/' + post.id)
            }
        })

    })

})
module.exports = router;