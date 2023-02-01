const mongoose=require('mongoose')
const Schema = mongoose.Schema;
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken')
const crypto=require('crypto')

const ObjectId = Schema.ObjectId;

const user=new Schema({
    name:{type:String, require:true},
    admission_no:{type:String, require:true},
    cgpa:{type:Number,require:true},
    resume_link:{type:String,require:true},
    password:{type:String,require:true}
})
user.pre("save", async function (next) {
    if (this.isModified("password")) {
      this.password = await bcrypt.hash(this.password, 10);
    }
  
    next();
  });
user.methods.matchPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
  };
user.methods.generateToken = function () {
    return jwt.sign({ _id: this._id },"nahipata");
  };  

module.exports=mongoose.model("user",user);