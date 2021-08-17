
const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post");

//POSTS
router.post("/", async (req, res) =>{
    const newPost = new this.post(req.body);
    try{
        const savedPost = await newPost.save();
        res.status(200).json(savedPost)
    } catch (err) {
        res.status(500).json(err);
    }
});

//REGISTER
router.post("/register", async (req,res)=>{
    try{
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        });
        
        const user = await newUser.save();
        res.status(200).json(newUser);
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router





















// const router = require("express").Router();
// const User = require('../models/User');

// //REGISTER
// router.post("/register", async(req,res) => {
//     try {
//         // console.log(req.body)
//         const newUser = new User({
//             username: req.body.username,
//             email: req.body.email,
//             password: req.body.password,
//         });
//         console.log()
//         const user = await newUser.save();
        
//         res.status(200).json(user);
//     }catch (err) {
//         res.status(200).json(err);
//     }
// });


// module.exports = router;