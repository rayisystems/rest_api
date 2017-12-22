import mongoose from 'mongoose';
 
export default callback => {
    let db = mongoose.connect('mongodb://localhost:27017/boatpal_dev',{
        useMongoClient:true
    });
    callback(db);
}