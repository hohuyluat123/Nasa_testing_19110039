const express = require('express');
const { 
    httpGetAllLaunches,
    httpAddNewLaunch,
    httpAbortLaunch,
 } = require('./launches.controller');

const launchesRoutes = express.Router();

launchesRoutes.get('/', httpGetAllLaunches);
launchesRoutes.post('/', httpAddNewLaunch);
launchesRoutes.delete('/:id', httpAbortLaunch);

module.exports = launchesRoutes;