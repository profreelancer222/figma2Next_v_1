const User = require("../models/user");
const {
    verifyAccessToken,
    generateAccessToken
} = require("../src/jwt")
const isEmpty = require('is-empty')
const validator = require('validator')
const signUp = async (req, res) => {
    try {
        const {
            email,
            password
        } = req.body;
        if (isEmpty(email) || !validator.isEmail(email) || isEmpty(password)) {
            return res.sendStatus(400);
        }
        try {
            const result = await User.findOne({
                where: {
                    email: email
                }
            })
            if (result === null){
                const newUser = await User.create({
                    email: email,
                    password: password
                });
                return res.status(202).json({success: "created"});
            }
            else {
                return res.json({error: "already exist"});
            }
            //console.log('User created:', newUser);
        } catch (error) {
            console.error('Error creating user:', error);
        }
    } catch (err) {
        res.sendStatus(500);
        console.error(err);
    }
}

const logIn = async (req, res) => {
    // try {
    //     const { email, password } = req.body;
    //     console.log(password, email);
    //     console.log(req.body)
    //     if (isEmpty(email) || !validator.isEmail(email) || isEmpty(password)) {
    //         return res.sendStatus(400);
    //     }
    //     try { 
    //             const result = await User.findOne({email: email})
    //             console.log('Users found:', result);
    //         } catch(err) {console.log(err)}

    //     if (result.password == password) {
    //             const token = generateAccessToken({ email: email } );
    //             res.status(202).json({ token });
    //         }
    //     else {
    //         return res.json({error : 'password incorrect'});
    //     }
    // } catch (err) {
    //     res.sendStatus(500);
    //     console.error(err);
    // }

    try {
        const {
            email,
            password
        } = req.body;
        if (isEmpty(email) || !validator.isEmail(email) || isEmpty(password)) {
            return res.sendStatus(400);
        }
        try {
            const result = await User.findOne({
                where: {
                    email: email
                }
            })
            if (!(result === null )) {
                if (result.password == password) {
                    const token = generateAccessToken({
                        email: email

                    });
                    res.status(202).json({
                        token
                    });
                } else {
                    return res.json({
                        error: 'password incorrect'
                    });
                }
            }
            else {
                return res.sendStatus(404);
            }
        } catch (error) {
            console.error('Error find user:', error);
        }
    } catch (err) {
        res.sendStatus(500);
        console.error(err);
    }

}

module.exports = {
    signUp,
    logIn
};