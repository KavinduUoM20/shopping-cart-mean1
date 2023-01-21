const User = require('../Model/UserSchema');
const jwt = require("jsonwebtoken");

const registerUser =(req , resp)=> {
    const user = new User({
        userName : req.body.userName,
        password: req.body.password
    });
    user.save().then(result=>{
        payload = {subject:user._id}
        token = jwt.sign(payload ,'secretKey')
        resp.status(200).send({token})
    }).catch(error=>{
        resp.status(500).json(error)
    });
}

const loginUser=(req , resp)=> {
    /*const user = new User({
        userName:req.body.userName,
        password:req.body.password
    });
    console.log(user)*/

    User.findOne({userName:req.body.userName}).then(result=>{
        if (result!==null){
            if(result.password!==req.body.password){
                resp.status(200).json({state:true,"message":"Password Incorrect!"})
            }else {
                payload = {subject:result._id}
                token = jwt.sign(payload ,'secretKey')
                resp.status(200).send({token})
                /*resp.status(200).json({state:true,"message":"You Can Log In!"})*/
            }
        }else{
            resp.status(200).json({state: false,"message":"failed to login" /*data: result*/});
        }
    }).catch(error=>{
        resp.status(500).json(error);
    })
}

module.exports = {
    registerUser,
    loginUser
}



/*
    .then(result=>{
        if (result!==null){
            resp.status(200).json({state: true, data: result});
        }else{
            resp.status(200).json({state: false, data: result});
        }
    }).catch(error=>{
        resp.status(500).json(error);
    })*/
