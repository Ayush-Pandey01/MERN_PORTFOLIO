const {Intro,About,Experience,Project,Education,Contact} = require('../models/portfolioModel.js')
const router = require('express').Router();
const {User} = require('../models/userModel.js')

// Admin Login

router.post("/admin-login",async(req,res)=>{
    try {
       
        
        UserInput = {username:req.body.username ,password:req.body.password }
        const user = await User.findOne(UserInput)
        user.password=''
       
    if(user){
        res.status(200).send({
            data:user,
            success:true,
            message:"Login Successfully"
        })
    }else{
        res.status(200).send({
            data:user,
            success:false,
            message:"Invalid username or Password"
        })
    }
    } catch (error) {
       
        res.status(500).send(error)
    }
})

// For Updating The Intro Section

router.post('/update-intro',async(req,res)=>{
    try {
        const intro = await Intro.findOneAndUpdate(
            {_id:req.body._id},
            req.body,
            {new:true}

        );
        res.status(200).send(
           {
             data:intro,
             success:true,
             message:"Intro Updated Successfully"
           }
        )

    } catch (error) {
        res.status(500).send(error)
    }
})
// For Updating The About Section

router.post('/update-about',async(req,res)=>{
    try {
        const about = await About.findOneAndUpdate(
            {_id:req.body._id},
            req.body,
            {new:true}

        );
        res.status(200).send(
           {
             data:about,
             success:true,
             message:"About Updated Successfully"
           }
        )

    } catch (error) {
        res.status(500).send(error)
    }
})

//  All Portfolio Data Show

router.get('/get-portfolio-data', async(req,res)=>{
    try {
        const intros = await Intro.find();
        const abouts = await About.find();
        const experiences = await Experience.find();
        const projects = await Project.find();
        const educations = await Education.find();
        const contacts = await Contact.find();


        res.status(200).send({
            intro:intros[0],
            about:abouts[0],
            experiences:experiences,
            projects:projects,
            educations:educations,
            contact:contacts[0]
        })
    } catch (error) {
        res.status(500).send(error)
    }
});


// Add New Experience

router.post('/add-experience',async(req,res)=>{
   try {
    const experience = new Experience(req.body)
    console.log(experience)
    
    await experience.save()
    res.status(200).send({
        data:experience,
        success:true,
        message:"Experience Added Successfully"
    });
   } catch (error) {
    res.status(500).send(error);
    console.log(error)
   }

})


// Update Routes

router.post("/update-experience",async(req,res)=>{
    try {
        const experience = await Experience.findOneAndUpdate(
            {_id:req.body._id},
            req.body,
            {new:true}

);
res.status(200).send(
    {
      data:experience,
      success:true,
      message:"Experience Updated Successfully"
    }
 )

} catch (error) {
    res.status(500).send(error)
    }
})


// Delete Experience

router.post("/delete-experience",async(req,res)=>{
    try {
        const experience = await Experience.findByIdAndDelete({_id:req.body._id})
        res.status(200).send({
        data:experience,
        success:true,
        message:"Experience Deleted Successfully"
    })
    } catch (error) {
      res.status(500).send(error)  
    }
})



// Adding the new project


router.post('/add-project',async(req,res)=>{
    try {
     const project = new Project(req.body)
     console.log(project)
     
     await project.save()
     res.status(200).send({
         data:project,
         success:true,
         message:"Project Added Successfully"
     });
    } catch (error) {
     res.status(500).send(error);
     console.log(error)
    }
 
 })

// Updating Project


router.post("/update-project",async(req,res)=>{
    try {
        const project = await Project.findOneAndUpdate(
            {_id:req.body._id},
            req.body,
            {new:true}

);
res.status(200).send(
    {
      data:project,
      success:true,
      message:"Project Updated Successfully"
    }
 )

} catch (error) {
    res.status(500).send(error)
    }
})


// Delete Project

router.post("/delete-project",async(req,res)=>{
    try {
        const project = await Project.findByIdAndDelete({_id:req.body._id})
        res.status(200).send({
        data:project,
        success:true,
        message:"Project Deleted Successfully"
    })
    } catch (error) {
      res.status(500).send(error)  
    }
})




module.exports = router;