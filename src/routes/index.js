import express from 'express';

import config from '../config';
import middleware from '../middleware';
import initDb from '../db';
import user from '../controller/user';
import account from '../controller/account';

const router = express();

// Connect to Database
initDb(db =>{

// Internal Middleware
router.use(middleware({config, db}));

// API Routes
router.use('/user', user({config, db}));
router.use('/account', account({config, db}));


});

export default router;

