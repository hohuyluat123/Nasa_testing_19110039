const express= require('express');

const{httpgetAllLaunches, httpAddNewLaunch, httpAbortLaunch}= require('./launches.controller');

const launchesRoutes= express.Router();

// /planets/
launchesRoutes.get('/', httpgetAllLaunches);
launchesRoutes.post('/', httpAddNewLaunch);
launchesRoutes.delete('/:id',httpAbortLaunch);
module.exports= launchesRoutes;