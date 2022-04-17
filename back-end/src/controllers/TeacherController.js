const express = require('express');
const Teacher = require("../models/teachermodel");
const router = express.Router();

router.get("/:_id", async (req, res) => {
    try {
        let teacher = await Teacher.find({_id:req.params._id}).populate({path:"ClassID"}).lean().exec();
        return res.status(200).send(teacher);
    } catch (error) {
        return res.status(500).send(error.message)
    }
});

router.post("", async (req, res) => {
    try {
        const teacher = await Teacher.create(req.body);
        res.send(teacher);
    }
    catch (err) {
        res.send(err.message);
    }
});

router.get("/:TeacherName", async (req, res)=>{
    try {
        let teacher = await Teacher.find({TeacherName: req.params.TeacherName}).populate({path:"ClassID"}).lean().exec();
        return res.status(200).send(teacher);
    } catch (error) {
        return res.status(500).send(error.message)
    }
})

module.exports = router;