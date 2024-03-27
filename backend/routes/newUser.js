const express = require('express')
const router = express.Router()
const user = require("../models/user")
const {body , check, validationResult} = require('express-validator')

router.post('/newUser',[
   check('email').isEmail(),

], async (req, res) => {
   console.log(req.body)

   const data_email = req.body

   const errors = validationResult(req)
   if (!errors.isEmpty()){
      return res.status(400).json({errors:errors.array()})
   }
   try {
       const newUser = new user({
          email: data_email
       
       });
 
       await newUser.save();
 
       res.json({ progress: 1 });
    } catch (error) {
       console.error(error);
       res.json({ progress: 2 });
    }
 });
 



module.exports = router