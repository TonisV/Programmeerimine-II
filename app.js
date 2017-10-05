const express = require('express');
const path = require('path');

// Init App
const app = express();

// Load View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Home Route
app.get('/', function(req, res){
    let articles = [
        {
            id: 1,
            title: 'Article One',
            author: 'Tõnis Vaimann',
            body: 'This is article one'
        },
        {
            id: 2,
            title: 'Article Two',
            author: 'Tõnis Vaimann',
            body: 'This is article Two'
        },
        {
            id: 3,
            title: 'Article Three',
            author: 'Tõnis Vaimann',
            body: 'This is article Three'
        }
    ];
    res.render('index', {
        pageTitle: 'Articles',
        articles: articles
    });
});

// Add Route
app.get('/articles/add', function(req, res) {
    res.render('add_article', {
        pageTitle: 'Add Article'
    });
});

// Start Server
app.listen(3000, function(){
    console.log('Server started on port 3000...');
});