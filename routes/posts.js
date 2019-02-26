const express = require('express');
const db = require('../models');
const router = express.Router();

// POST /posts - create one post
router.post('/', function(req,res) {
    console.log('POST /posts', req.originalUrl)
    db.post.create({
        title: req.body.title,
        content: req.body.content,
        authorId: req.body.authorId
    })
    .then(data => {
        res.redirect('/')
    })
})

// GET /posts/new - send the form for a post
router.get('/new', function(req,res) {
    console.log('GET posts/new', req.originalUrl)
    db.author.findAll()
        .then(function(authors) {
            res.render('posts/new', {authors});
        })
        .catch(err => {
            res.status(500).render('main/500');
        })
})

// GET /posts/id - read one post
router.get('/:id', (req,res) => {
    db.post.findOne({
        where: {id: req.params.id},
        include: [db.comment, db.author]
    })
    .then(post => {
        console.log(post)
        res.render('posts/show', {post})
    })
})
// PUT /posts/:id - update one post

// DELETE /posts/:id - remove one post













module.exports = router;
