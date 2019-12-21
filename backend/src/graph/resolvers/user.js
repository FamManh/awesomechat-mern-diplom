const UserModel = require('../../models/user');

let userMocks = [
    {
        firstName : "Manh",
        lastName : "Fam",
        avatar: "",
        email: "fammanh217@mail.ru",
        password: "21091997",
        verifyToken: "",
        phone: "01234567890"
    },
    {
        firstName : "Linh",
        lastName : "Fam",
        avatar: "",
        email: "linhphamxuan@mail.ru",
        password: "21091997",
        verifyToken: "",
        phone: "01234567890"
    },
    {
        firstName : "Sam",
        lastName : "Chin",
        avatar: "",
        email: "sam@mail.ru",
        password: "23061992",
        verifyToken: "",
        phone: "01234567890"
    }
]

module.exports = {
    users: () => {
        return userMocks;
    }
}
