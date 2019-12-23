const UserModel = require('../models/user');
const {i18n} = require('../i18n')

module.exports = (req, res, next)=>{
    const verifyToken = req.params.verifyToken
    UserModel.findOne({verifyToken})
    .then(async result=>{
        if(!result){
            throw new Error('Error')
        }
        result.verifyToken = "";
        result.isActive = true;
        await result.save();
        res.send(i18n(req.language, "auth.accountActivated.message"));
    })
    .catch(err=>{
        res.status(400).send('error')
    })
}
