const express = require("express");
const app = express();

//Lesson 2
app.get("/", (req, res) => {
    res.send({"message": "Welcome"});
});

const users = [];
users.push({id: 1, name: "Anders", age: 31, likes: "cats"});
users.push({id: 2, name: "Thomas", age: 24, likes: "dogs"});
users.push({id: 3, name: "Alex", age: 22, likes: "games"});
users.push({id: 4, name: "Jacob", age: 27, likes: "prasing the sun"});

app.get("/users", (req, res) => {
    res.send(users);
});

app.get("/users/:id", (req, res) => {
    const id = req.params.id;
    let user = null;

    for (i = 0; i < users.length; i++) {
        if (users[i].id == id) {
            user = users[i];
        }
    }

    res.send(user);
});

// Lesson 3
app.get("/welcome", (req, res) => {
    res.send("<p1>Welcome</p1>");
});

app.get("/me", (req, res) => {
    let Joakim = {
        "name": "Joakim Olsen",
        "age": 27,
        "occupation": "student",
        "status": "Very Hungry"
    };
    res.send(Joakim);
});

app.listen(8080);
console.log("Listening...");