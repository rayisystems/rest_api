import mongoose from 'mongoose';
 
export default callback => {
    let db = mongoose.connect('mongodb://localhost/boatpal_dev',{
        useMongoClient:true
    });
    callback(db);
}