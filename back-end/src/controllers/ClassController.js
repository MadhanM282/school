const express = require('express');
const Class = require("../models/classmodel");
const router = express.Router();

router.get("/", async (req, res) => {
    try {
        let classes = await Class.find().lean().exec();
        return res.status(200).send(classes);
    } catch (error) {
        return res.status(500).send(error.message)
    }
});

router.post("", async (req, res) => {
    try {
        const classes = await Class.create(req.body);
        res.send(classes);
    }
    catch (err) {
        res.send(err.message);
    }
});

module.exports = router;