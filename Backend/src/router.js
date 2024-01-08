const authController =  require('../controller/auth')
const jobController = require('../controller/job')
const express = require('express');
const router = express.Router();


//test flag
router.get('/', (req, res) =>{
    res.json({test: "success"})
});

router.post('/signup', authController.signUp);
router.post('/login', authController.logIn);
router.post("/postjob", jobController.postJob);

module.exports = router;