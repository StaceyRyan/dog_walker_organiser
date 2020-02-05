const UserModel = require ('../models/User.model');


const AuthenticateChecker = (req, res, next) => {
    console.log(Object.keys(req.session));
    if (req.session && req.session.user) {
        next();
    } else
        res.status(401).send("Forbidden. You are not logged in.")
}

module.exports = { AuthenticateChecker: AuthenticateChecker }