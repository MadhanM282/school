const express = require('express');
const Teacher = require("../models/teachermodel");
const router = express.Router();


router.get("/search", async (req, res)=>{
    try {
        console.log('query', req.query);
        let teacher = await Teacher.find({TeacherName: { $regex: req.query.search, $options: 'i' }}).populate({path:"ClassID"}).lean().exec();
        return res.status(200).send(teacher);
    } catch (error) {
        return res.status(500).send(error.message)
    }
})


module.exports = router;