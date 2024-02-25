const mongoose = require('mongoose');

//connectionID = mongodb+srv://amulyareddy23:SyCUqW_q9j79%40!b@cluster0.b9krsjs.mongodb.net/

// Connect to MongoDB
mongoose.connect('mongodb+srv://amulyareddy23:SyCUqW_q9j79%40!b@cluster0.b9krsjs.mongodb.net/');

// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
    username : String,
    password : String
});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    username : String,
    password : String,
    purchasedCourses :[{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Course'
    }]
});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
    title : String,
    description : String,
    price : Number,
    imageLink : String
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}