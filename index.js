/*NODE*/
/*const http = require('http');

const server = http.createServer((req, res) => {
    res.status = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
});

server.listen(3000, () =>{
    console.log('Serve on port 3000');
});*/

/* EXPRESS*/
const express = require('express');
const app = express();
const morgan = require('morgan');

// Settings
app.set('appName', 'Fazt Express Tutorial');
app.set('view engine', 'ejs');

// Middlewares
app.use(express.json());
app.use(morgan('dev'));
app.all('/user/:id', (req, res, next) => {
    console.log('Por aqui paso v2')
    next();
})

// Routes
app.get('/', (req, res) =>{
    const data = [{name: 'john'}, {name: 'joe'}, {name: 'cameron'}];
    res.render('index.ejs', {people: data});
});

app.get('/user', (req, res) =>{
    res.json({
        username: 'Cameron',
        lastname: 'john'
    });
});

app.post('/user/:id', (req, res) =>{
    console.log(req.body);
    console.log(req.params);
    res.send('POST REQUEST RECEIVED');
});

app.put('/user/:id', (req, res) =>{
    console.log(req.body);
    console.log(req.params.id)
    res.send("User id is " + req.params.id + " was edited successfully");
});

app.delete('/user/:id', (req, res) =>{
    console.log(req.params.id)
    res.send("User id is " + req.params.id + " was edited successfully");
});

app.use(express.static('public'));

app.listen(3000, () =>{
    console.log(app.get('appName'));
    console.log('Server on port 3000');
});