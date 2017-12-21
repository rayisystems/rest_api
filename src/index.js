import http from 'http';
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

import config from './config';
import routes from './routes';

const app = express();
app.server = http.createServer(app);

// Middleware
app.use(bodyParser.json({
    limit: config.bodyLimit
}));

// Passport Config

// API routes
app.use('/', routes);

app.server.listen(config.port);
console.log(`server started on ${app.server.address().port}`);

export default app;