const express = require('express');
const path = require('path');
const productsRouter = require('./routes/products');
const logEvent = require('./middlewares/logEvents');
const router = express.Router();

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.urlencoded({extended: false}));

app.use(express.json());

app.use(express.static(path.join(__dirname, '/public')));

// Log all requests
router.use((req, res, next) => {
    logEvent(`${req.method}\t${req.headers.origin}\t${req.url}\n`, 'requestTracing.txt');
    console.log(`${req.method}\t${req.path}`);
    next();
});

// Define routes
router.get('^/$|/index(.html)?', (req, res) => {
    res.sendFile('./views/index.html', { root: path.join(__dirname) });
});

router.get('/about(.html)?', (req, res) => {
    // throw(new Error('Something went wrong'));
    res.sendFile('./views/about.html', { root: path.join(__dirname) });
});

router.get('/products(.html)?', (req, res) => {
    res.sendFile('./views/products.html', { root: path.join(__dirname) });
});

module.exports = router;


app.use(require('./middlewares/errorHandler'));

app.listen(PORT, () => {
    logEvent(`Server starts listening on port ${PORT}`, 'ServerEvents.txt');
    console.log(`Server starts listening on port ${PORT}`);
});