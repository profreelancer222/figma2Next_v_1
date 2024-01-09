const User = require("../models/user");
const { verifyAccessToken, generateAccessToken } = require("../src/jwt")
const isEmpty = require('is-empty')
const validator = require('validator')
const  signUp = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (isEmpty(email) || !validator.isEmail(email) || isEmpty(password)) {
            return res.sendStatus(400);
        }
        result = await User.create({ email, password });
        return res.sendStatus(201);
    } catch (err) {
        res.sendStatus(500);
        console.error(err);
    }
}

const  logIn = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (isEmpty(email) || !validator.isEmail(email) || isEmpty(password)) {
            return res.sendStatus(400);
        }
        try { const result = await User.findOne({email: email});
                if (isEmpty(result) || result == null) {
                    return res.sendStatus(404);
                }
            } catch(err) {console.log(err)}

        if (result.password == password) {
                const token = generateAccessToken({ email, password });
                res.status(202).json({ token });
            }
        else {
            return res.json({error : 'password incorrect'});
        }
    } catch (err) {
        res.sendStatus(500);
        console.error(err);
    }
}

module.exports = {
    signUp, logIn
};

