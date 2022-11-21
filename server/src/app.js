const express = require('express');
const cors = require('cors');
const path = require('path');
const morgan = require('morgan');


const planetRoutes = require('./routes/planets/planets.routes')
const launchesRoutes = require('./routes/launches/launches.routes')

const app = express();

app.use(cors({
    origin: 'http://localhost:3000'
}));
app.use(morgan('combined'));

app.use(express.json());
app.use(express.static(path.join(__dirname,'..','build')));

app.use('/planets',planetRoutes);
app.use('/launches',launchesRoutes);
app.get('/*', (req,res) => {
    res.sendFile(path.join(__dirname,'..','build','index.html'));
});


module.exports = app;