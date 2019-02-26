const express = require('express');
const db = require('../models');
const router = express.Router();



// GET /authors - reads all authors
router.get('/', (req,res) => {
    db.author.findAll()
        .then(authors => {
            res.render('authors/index', {authors});
        })
})

// POST /authors - creates a new author
router.post('/', (req, res) => {
    console.log('POST /authors', req.originalUrl)
    db.author.create({
        name: req.body.name
    })
    .then(author => {
        res.redirect('/authors')
    })
})

// GET /authors/new - gets form for a new author
router.get('/new', (req, res) => {
    console.log('GET authors/new')
    res.render('authors/new')
})

// GET /authors/:id - show one author and their posts
router.get('/:id', (req, res) => {
    console.log('/authors/:id', req.originalUrl)
    db.author.findOne({
        where: {id: req.params.id},
        include: [db.post]
    })
    .then(author => {
        res.render('authors/show', {author})
    })
})

module.exports = router;

