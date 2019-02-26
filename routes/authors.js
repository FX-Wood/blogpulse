const express = require('express');
const db = require('../models');
const router = express.Router();



// GET /authors - reads all authors
router.get('/', (req,res) => {
    db.author.findAll()
        .then(authors => {
            if (!authors) throw Error();
            res.render('index', {authors});
        })
        .catch(err => {
            res.send(err)
        })
})

// POST /authors - creates a new author
router.post('/', (req, res) => {
    db.author.create({
        name: req.body.name
    })
    .then(author => {
        if (!author) throw Error();
        res.redirect('/authors')
    })
    .catch(err => {
        res.send(err)
    })
})

// GET /authors/new - gets form for a new author
router.get('/new', (req, res) => {
    res.render('authors/new')
})

// GET /authors/:id - show one author and their posts
router.get('/authors/:id', (req, res) => {
    db.findOne({
        where: {id: req.params.id},
        include: [db.post]
    })
    .then(author => {
        if (!author) throw Error();
        res.render('authors/show', {author})
    })
    .catch(err => {
        res.send(err)
    })
})

module.exports = router;

