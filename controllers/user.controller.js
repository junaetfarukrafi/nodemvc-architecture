const path = require("path");

const user = require("../models/user.model")

exports.getUser = (req,res)=>{
    res.sendFile(path.join(__dirname+"/../views/index.html"));
};

exports.saveUser = (req,res)=>{
    const name= req.body.name;
    const age= Number(req.body.age);
    const users = {
        name,age,
    };
    user.push(users);
    res.status(201).json({
        success: true,
        user,
    });
    };