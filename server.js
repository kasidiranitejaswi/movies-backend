let config = require('./config');
let mongoose = require('mongoose');
let express = require('express');
let bodyParser = require('body-parser');
let app = express();
let routes = require('./routes/router');

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));


mongoose.connect(config.db.mongo.uri).then(
    (response) => { console.log("successfully Connected to DB"); }
).catch(
   (err) => {
       console.log("error",err)
   }
);
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', "*");


    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');

    res.setHeader('Access-Control-Allow-Headers', 'x-access-token,authorization,Content-Type,Access-Control-Request-Headers,enctype');

    
    res.setHeader('Access-Control-Allow-Credentials', true);

    if (req.method === 'OPTIONS') {
        res.status(200);
        res.end();
    }
    else {
    
        next();
    }
});

app.use( '/api' , routes )

app.listen(config.port);

module.exports = app;
