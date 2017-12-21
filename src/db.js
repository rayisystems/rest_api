import mongoose from 'mongoose';
 
export default callback => {
    let db = mongoose.connect('mongodb://localhost/boatpal',{
        useMongoClient:true
    });
    callback(db);
}