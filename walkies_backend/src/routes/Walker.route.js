const express = require('express');
const WalkerRouter = express.Router();
// const WalkiesModel = require('../models/Walkies.model.js');
const WalkControl = require('../controllers/walker.controller');
const Walk = new WalkControl();

WalkerRouter.use(express.json());
WalkerRouter.use((req, res, next) => {
    next();
})

WalkerRouter.post('/newWalk', async (req, res) => {
    
    console.log('new walk added', req.body);
    
    const newWalk = await Walk.newWalk(req.body);
    res.status(newWalk.status).send(newWalk.msg);
})

module.exports = WalkerRouter;