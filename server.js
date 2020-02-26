// import express
const express = require('express');
const hbs = require('hbs');
var app = express();

hbs.registerPartials(__dirname+'/views/partials')
// register templating engine
app.set('view engine', 'hbs');
// serve static file
app.use(express.static(__dirname+'/public'))
hbs.registerHelper('getCurrentYear', ()=>{
    return new Date().getFullYear();
});

hbs.registerHelper('screamIt', (text)=>{
    return text.toUpperCase();
})
// setup your route
app.get('/', (req,res)=>{
    //sending html
    // res.send('<h1>Hello Elvis</h1>');

// sending JSON
    res.render('home.hbs',{
        name:'Elvis',
        likes: [
            'food',
            'money',
            'girls'
        ],
        pageTitle: 'Homepage',
    })
});

app.get('/about', (req,res)=>{
    res.render('about.hbs', {
        pageTitle: 'About Page',
    })
})

app.get('/bad', (req,res)=>{
    res.send({
        error:'you failed to do something'
    })
})

app.listen(3000)