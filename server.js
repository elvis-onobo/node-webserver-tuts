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

app.listen(3000)