import mongoose from 'mongoose';
import {Router} from 'express';

import User from '../model/user'; 

 export default({config, db}) => {
     let api = Router();

    api.post('/add', (req, res, next)=>{
        let user = new User();
        user.name = req.body.name;
        user.save(err=>{
            if (err) {
                res.send(err);
            }
            res.status(200).send({ 
                message: "getting first route"
            });
        });
        
    });

     
     return api
 }