const mongoose = require('mongoose');

const introSchema = new mongoose.Schema({
    welcomeText:{
        type:String,
        required:true
    },
    fristName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    caption:{
        type:String,
        required:true
    },
    ImgUrl:{
        type:String,
        required:true
    },
    CVURL:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
});

const aboutSchema = new mongoose.Schema({
    lottieURL:{
        type:String,
        required:true
    },
    description1:{
        type:String,
        required:true
    },
    description2:{
        type:String,
        required:true
    },
    skills:{
        type:Array,
        required:true
    },
})

// const skillSchema = new mongoose.Schema({
//     skillName:{
//         type:String,
//         required:true
//     },
//     skillImage:{
//         type:String,

//         required:true
//     }
// })

const experienceSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    period:{
        type:String,
        required:true
    },
    company:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
});

const projectsSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
   
    image:{
        type:String,
        required:true
    },
    gitHubLink:{
        type:String,
        required:true
    },
    previewLink:{
        type:String,
        required:true
    },
})

const educationSchema = new mongoose.Schema({
    Title:{
        type:String,
        required:true
    },
    College:{
        type:String,
        required:true
    },
    period:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
})

const contactSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    age:{
        type:String,
        required:true,
    },
    gender:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    mobile:{
        type:String,
        required:true,
    },
    address:{
        type:String,
        required:true,
    },
})

module.exports = {
    Intro : mongoose.model("intros" , introSchema),
    About : mongoose.model("abouts" , aboutSchema),
    Experience : mongoose.model("experiences" , experienceSchema),
    Project : mongoose.model("projects" , projectsSchema),
    Education : mongoose.model("educations" , educationSchema),
    Contact : mongoose.model("contacts" , contactSchema),
}