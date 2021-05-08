//const express = require("express");
import express from "express";
const app = express();

//const helmet = require("helmet")
import helmet from "helmet";
app.use(helmet());

import passwordUtil from "./util/password.mjs"

/* 
How to get an external library in our HTML files
- Get from the CDN
- Put our client in a script file and include it (serve statically)
- Get from NPM - Copy files over from NPM manually
- Point to the file from the html script tag (src) - Just the single file/folder
*/

import session from "express-session";
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));

import sessionRouter from "./routes/session.mjs"
app.use(sessionRouter);

import rateLimit from "express-rate-limit";
const basicLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 // limit each IP to 100 requests per windowMs
});
const authLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 10 // limit each IP to 100 requests per windowMs
});
app.use(basicLimiter);
app.use("/auth/*", authLimiter);

app.get("/auth/login", (req, res) => {
    res.send({ message: "Login..." });
});

const ipLogger = (req, res, next) => {
    console.log(req.ip);
    next();
};

app.use(ipLogger);

app.get("/", (req, res, next) => {
    // res.send(`<h1>First</h1>`);
    console.log("it hits me... oh yeah");
    next();    
});  
    
app.get("/", (req, res) => {
    res.send(`<h1>Second</h1>`);
});
    
app.get("/house/door", (req, res) => {    
    res.send(`<h1>You've come to the right place</h1>`);    
});
    
app.get("/house/*", (req, res) => {
    res.send(`This house now features that.`);
});

app.get("/")

app.get("*", (req, res) => {
    res.send("Couldn't find the page you're looking for");
});

app.listen(8080, (error) => {
    if (error) {
        console.log(error);
    }
    console.log("Server is runnign on", 8080);
})