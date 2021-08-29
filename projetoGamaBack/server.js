var express = require('express');
var cors = require('cors')

app = express();

port = process.env.PORT || 3002;
mongoose = require('mongoose');
cadastro = require('./api/models/cadastro');

bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://root:*fabiana123@google-cloud-sao-paulo.vunyc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use((req, res, next) =>{
    res.header("Access-Control-Allow-Origin", "*")
    app.use(cors());
    next();
});

var routes = require('./api/routes/cadastroRoutes');
routes(app);

app.listen(port);