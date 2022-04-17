const express = require('express');
const School = require("../models/schoolmodel");
const router = express.Router();

router.get("/:_id", async (req, res) => {
    try {
        let school = await School.find({adminId:req.params._id}).populate({path:"TeachersId",populate:{path:"ClassID"}}).lean().exec();
        return res.status(200).send(school);
    } catch (error) {
        return res.status(500).send(error.message)
    }
});

router.post("", async (req, res) => {
    try {
        const school = await School.create(req.body);
        res.send(school);
    }
    catch (err) {
        res.send(err.message);
    }
});

module.exports = router;