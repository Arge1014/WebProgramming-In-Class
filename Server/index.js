const express = require('express');
const path = require('path');
const userController = require('./controllers/users')
const gameController = require('./controllers/game')


const app = express();
const port = 3000;

app
   /* .use( function( req, res, next){
        //logging
        console.log({params: req.params, body: req.body, url: req.url, query: req.query, headers: req.headers});
        next();
    } )
    .get(   '/', 
            (req, res) => res.send('Hello new paltz')
        )
    .get(   '/heb',
            function(req, res){
                res.send("shalom world")
            }
    )*/
    .use('/static', express.static(path.join(_dirname, '../NoServer')))
    .use('/users', userController)
    .use('/game', gameController);

app.listen(port, () => console.log('running on port http://localhost:${port}'));