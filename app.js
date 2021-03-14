const mongoose = require("mongoose");
const express = require("express");
const dotenv = require("dotenv");
const app = express();

dotenv.config({path:'./config.env'});

const DB = process.env.DATABASE;

mongoose.connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(() => {
    console.log(`connection successful..`);
}).catch((err) => console.log(`no connection`));

// middleware

const middleware = (req, res, next) => {
    console.log(`Hellllo my middleware`);
    next();
}

app.get("/", (req, res) => {
    res.send(`Hellllooooooo from the neelam`);
});
app.get("/about", middleware, (req, res) => {
    console.log(`Hellllo about me`);
    res.send(`Hellllooooooo about the neelam`);
});
app.get("/contact", (req, res) => {
    res.send(`Hellllooooooo from contact the neelam`);
});
app.get("/signin", (req, res) => {
    res.send(`Hellllooooooo from login the neelam`);
});
app.get("/signup", (req, res) => {
    res.send(`Hellllooooooo from registraion the neelam`);
});

app.listen(3000, () => {
    console.log(`server is running at port 3000`);
});
 