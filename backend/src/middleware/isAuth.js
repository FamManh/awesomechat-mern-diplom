const jwt = require('jsonwebtoken')

module.exports = (req, res, next) =>{
    const authHeader = req.get("Authorization");
    if(!authHeader){
        req.isAuth = false;
        return next();
    }
    const token = authHeader.split(' ')[1]; // Authorization: Bearer dfsadfasd.sdfasdfsa.sdfsdf
    if(!token || token === ""){
        req.isAuth = false;
        return next();
    }
    let decodedToken;
    let secretkey = process.env.JWT_SECRET_KEY;
    try{
        decodedToken = jwt.verify(token, secretkey);
    }catch(err){
        req.isAuth = false;
        return next();
    }

    if(!decodedToken){
        req.isAuth = false;
        return next();
    }
    req.isAuth = true;
    req.userId = decodedToken.userId;
    req.language = 'en';
    return next();
}
 