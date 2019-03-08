require('dotenv').config();
const express = require('express');
const db = require('./models');
const ejsLayouts = require('express-ejs-layouts');
const app = express();

const port = process.env.PORT || 8080

app.set('view engine', 'ejs');
app.use(ejsLayouts);
app.use(express.urlencoded({extended: false}));
app.use(express.static('static'));

app.get('/', (req, res)=> {
    db.post.findAll({
        include: [db.author]
    })
    .then(posts => {
        if (!posts) throw Error();
        res.render('main/index', {posts});
    })
})

app.use('/authors', require('./routes/authors'));
app.use('/posts', require('./routes/posts'));
app.use('/comments', require('./routes/comments'))
app.use('/tags', require('./routes/tags'))

app.listen(port, () => {
    console.log('blogpulse is running')
    console.log('listening on ' + port)
})