const AuthSchema = require("../models/userAuthModel");


const createAuthModel  = async(req,res)=> {
    const{uname,gmail,pwd} = req.body;
    try{
        const myModel = await AuthSchema.create({uname,gmail,pwd});
        res.status(200).json({myModel});
    }catch(e) {
        res.status(400).json({error: e.message});
    }
}

const getUserDetails = async(req,res)=> {
    console.log(req.body);
    const{uname,gmail,pwd} = req.body;
    try{
        const myModel = await AuthSchema.findOne({gmail});
        res.status(200).json({myModel});
    }catch(e) {
        res.status(400).json({error: e.message});
    }
}

module.exports = {createAuthModel,getUserDetails};