// import express
const express = require('express');

var app = express();

// setup your route
app.get('/', (req,res)=>{
    //sending html
    // res.send('<h1>Hello Elvis</h1>');

// sending JSON
    res.send({
        name:'Elvis',
        likes: [
            'food',
            'money',
            'girls'
        ]
    })
});

app.get('/about', (req,res)=>{
    res.send('About me')
})

app.get('/bad', (req,res)=>{
    res.send({
        error:'you failed to do something'
    })
})

app.listen(3000)