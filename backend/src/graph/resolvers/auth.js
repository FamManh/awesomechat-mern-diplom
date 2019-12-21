const UserModel = require('../../models/user');
const bcrypt = require('bcrypt')

module.exports = {
    signup: args =>{
        return UserModel.findOne({email: args.userInput.email})
            .then(user=>{
                if(user){
                    throw new Error('User exists alredy.');
                }

                // do something there

                return args.userInput;
            })
            .catch(err=>{
                throw err;
            })
    }
}
