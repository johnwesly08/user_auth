const AuthSchema = require("../models/userAuthModel");


const createAuthModel  = async(req,res)=> {
    const{username,gmail,password} = req.body;
    try{
        const myModel = await AuthSchema.create({username,gmail,password});
        res.status(200).json(myModel);
    }catch(e) {
        res.status(400).json({error: e.message});
    }
}

const getUserDetails = async(req,res)=> {
    const{username,gmail,password} = req.body;
    try{
        const myModel = await AuthSchema.find({username,gmail,password});
        res.status(200).json(myModel);
    }catch(e) {
        res.status(400).json({error: e.message});
    }
}

module.exports = {createAuthModel,getUserDetails};