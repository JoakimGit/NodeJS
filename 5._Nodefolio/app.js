const express = require("express");
const app = express();
const fs = require("fs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use(express.static("public"));

const projectsRouter = require("./routes/projects");
const contactRouter = require("./routes/contact");

app.use(projectsRouter.router);
app.use(contactRouter.router);

const header = fs.readFileSync(__dirname + "/public/header/header.html",  {encoding:'utf8', flag:'r'});
const footer = fs.readFileSync(__dirname + "/public/footer/footer.html",  {encoding:'utf8', flag:'r'});

const frontpage = fs.readFileSync(__dirname + "/public/frontpage/frontpage.html",  {encoding:'utf8', flag:'r'});
const projects = fs.readFileSync(__dirname + "/public/projects/projects.html",  {encoding:'utf8', flag:'r'});
const contact = fs.readFileSync(__dirname + "/public/contact/contact.html",  {encoding:'utf8', flag:'r'});
const schedule = fs.readFileSync(__dirname + "/public/schedule/schedule.html",  {encoding:'utf8', flag:'r'});
const resume = fs.readFileSync(__dirname + "/public/resume/resume.html",  {encoding:'utf8', flag:'r'});

app.get("/", (req, res) => {
    res.send(header + frontpage + footer);
});

app.get("/resume", (req, res) => {
    res.send(header + resume + footer);
});

app.get("/projects", (req, res) => {
    res.send(header + projects + footer);
});

app.get("/contact", (req, res) => {
    res.send(header + contact + footer);
});

app.get("/schedule", (req, res) => {
    res.send(header + schedule + footer);
});

const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, (err) => {
    if (err) {
        console.log(err);
    }
    console.log("Listening to server at port", server.address().port);
})