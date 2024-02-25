const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User , Course } = require("../db")

// User Routes
router.post('/signup',  (req, res) => {
    // Implement user signup logic
    const username = req.headers.username;
    const password = req.headers.password;

    User.create({
        username : username ,
        password:password
    })
    res.json({
        msg : "User created succesfully!"
    })
    

});

router.get('/courses', (req, res) => {
    // Implement listing all courses logic
    const newOne = Course.find({});
    res.json({
        courses : newOne
    })
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId;
    const username = req.headers.username;

    await User.updateOne({ username} , { "$push" : {purchasedCourses : courseId}} )
    res.json({
        msg : "Course purchased!"
    })
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const user = await User.findOne({
        username : req.headers.username
    })

    const cour = await Course.find({ _id : {"$in" : user.purchasedCourses}})
    res.json({
        response : cour
    })
    
});

module.exports = router