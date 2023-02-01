const mongoose = require('mongoose');

module.exports=async()=>
{
    try{
        mongoose.set('strictQuery', false);   
await mongoose.connect('mongodb+srv://shivambmishra10:krishna@cluster0.5urgl.mongodb.net/Internship_tracker?retryWrites=true&w=majority');
console.log("connected to database");

    }
    catch(error)
    {
        console.log("could not connect to the database.",error);
    }
}
