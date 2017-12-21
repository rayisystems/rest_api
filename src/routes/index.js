import express from 'express';

import config from '../config';
import middleware from '../middleware';
import initDb from '../db';

const router = express();

// Connect to Database
initDb(db =>{

// Internal Middleware
router.use(middleware({config, db}));

// API Routes

});

export default router

