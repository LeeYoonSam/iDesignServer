// 개발서버 실행하기 - npm run development
// 서버 실행하기 - npm start

// serverjs
// [LOAD PACKAGES]
var express     = require('express');
var app         = express();
var bodyParser  = require('body-parser');
var mongoose    = require('mongoose');
var path        = require('path');
var webpack     = require('webpack');
var WebpackDevServer    = require('webpack-dev-server');
var morgan      = require('morgan');
var session      = require('express-session');

// [CONFIGURE SERVER PORT]
var port = process.env.PORT || 3000;
const devPort = 4000;

// [ CONFIGURE mongoose ]
// CONNECT TO MONGODB SERVER
var db = mongoose.connection;
db.on('error', console.error);
db.once('open', function(){
    // CONNECTED TO MONGODB SERVER
    console.log("Connected to mongod server");
});

mongoose.connect('mongodb://localhost/idesign');

/* use session */
app.use(session({
    secret: 'iDesign1$1$234',
    resave: false,
    saveUninitialized: true
}));

// [CONFIGURE APP TO USE bodyParser]
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', express.static(path.join(__dirname, './../public')));

/* handle error */
app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, './../public/index.html'));
});

app.get('/hello', (req, res) => {
    return res.send('Hello iDesign');
});


// DEFINE MODEL
var Book = require('../models/book');

// [CONFIGURE ROUTER]
var router = require('../routes')(app, Book);

app.listen(port, () => {
    console.log('Express is listening on port', port);
});

if(process.env.NODE_ENV == 'development') {
    console.log('Server is running on development mode');
    const config = require('../webpack.dev.config');
    const compiler = webpack(config);
    const devServer = new WebpackDevServer(compiler, config.devServer);
    devServer.listen(
        devPort, () => {
            console.log('webpack-dev-server is listening on port', devPort);
        }
    );
}
