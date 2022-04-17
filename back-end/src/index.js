const express = require('express');

const connect = require('./configs/db');

const Admins = require('./controllers/AdminController')

const port = process.env.PORT || 8800;

const app = express();

app.use(express.json());

app.use("/admin",Admins)

app.listen(port, async () => {
    try {
        await connect();
        console.log(`running on port ${port}`);
    } catch (err) {
        console.log('err', err.massage);
    }
});