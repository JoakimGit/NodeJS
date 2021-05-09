const router = require("express").Router();

const projects = [
    {
        title: "Nodefolio",
        description: "A personal portfolio done with Node.js. You're looking at it.",
        gitURL: "https://github.com/JoakimGit/NodeJS/tree/main/5._Nodefolio",
        images: [],
        technologiesInvolved: ["Node.js", "Html", "CSS"]
    },
    {
        title: "Nordic Motorhome Rental",
        description: "A website for renting motorhomes by Nordic Motorhome Rental ",
        gitURL: "https://github.com/JoakimGit/NMR-Booking",
        images: [],
        technologiesInvolved: ["Java", "Spring Boot", "Html", "CSS"]
    },
    {
        title: "TRSS Webshop",
        description: "A webshop for buying security related solutions made by The Real Service & Security",
        gitURL: "https://github.com/JoakimGit/TRSS-Webshop",
        images: [],
        technologiesInvolved: ["Java", "Spring Boot", "Html", "CSS"]
    },
    {
        title: "Ships and sails",
        description: "A turn-based game with two players each controlling 1 ship. Players can move their ship or try to attack in order to sink the enemy ship. Some level of GUI.",
        gitURL: "https://github.com/JoakimGit/ShipsAndSails",
        images: [],
        technologiesInvolved: ["Java", "Spring boot", "Html", "CSS", "Javascript"]
    },
    {
        title: "Maze runner",
        description: "Given a maze of a specific format, this program helps a bug find its way from the entrance to the exit.",
        gitURL: "https://github.com/JoakimGit/MazeRunner",
        images: [],
        technologiesInvolved: ["Java"]
    }
];

router.get("/api/projects", (req, res) => {
    res.send({ projects });
});

module.exports = {
    router
};