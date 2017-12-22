import http from 'http';
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import passport from 'passport';
import cors from 'cors'

const LocalStrategy = require('passport-local').Strategy;

import config from './config';
import routes from './routes';

const app = express();
app.server = http.createServer(app);

// Middleware
app.use(bodyParser.json({
    limit: config.bodyLimit
}));

// Passport Config
app.use(passport.initialize());
let Account = require('./model/account');
passport.use(
    new LocalStrategy({
            usernameField: 'email',
            passwordField: 'password'
        },
        Account.authenticate()
    )
);

passport.serializeUser(Account.serializeUser());
passport.deserializeUser(Account.deserializeUser());

// CORS
app.use(cors());

// API routes
app.use('/', routes);

app.server.listen(config.port);
console.log(`server started on ${app.server.address().port}`);

export default app;