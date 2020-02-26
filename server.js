// import express
const port = process.env.PORT || 3000;
const express = require('express');
const hbs = require('hbs');
const fs = require('fs');


var app = express();

hbs.registerPartials(__dirname+'/views/partials')
// register templating engine
app.set('view engine', 'hbs');

// using a middleware
app.use((req, res, next)=>{
    var now = new Date().toString();
    var log = `${now}: ${req.method}, ${req.url}`;
    console.log(log);
    fs.appendFile('server.log', log + '\n', (err)=>{
        if(err){
            console.log('unable to append to server.log');
        }
    })
    next();
});

// app.use((req,res,next)=>{
//     res.render('maintenance.hbs');
// });

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

app.listen(3000, ()=>{
    console.log(`Server is on port ${port}`);
});