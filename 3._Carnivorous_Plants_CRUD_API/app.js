const express = require("express");
const app = express();

app.use(express.json());

let id = 7;

let carniPlants = [{id: 1, name: "Aldrovanda"},
                    {id: 2, name: "Brocchinia"},
                    {id: 3, name: "Byblis"},
                    {id: 4, name: "Catopsis"},
                    {id: 5, name: "Drosera"},
                    {id: 6, name: "Roridula"}];


app.get("/plants", (req, res) => {
    res.send({ carniPlants });
});

app.get("/plants/:id", (req, res) => {
    const id = req.params.id;
    const index = carniPlants.map(plant => plant.id).indexOf(Number(id));
    res.send({ "plant": carniPlants[index] });
});

app.post("/plants", (req, res) => {
    const plant = req.body;
    plant.id = id++;
    carniPlants.push(plant);
    res.send({ "data": plant });
});

app.patch("/plants/:id", (req, res) => {
    const id = Number(req.params.id);
    carniPlants = carniPlants.map(plant => {
        if (plant.id === id) {
            return { ...plant, ...req.body, id: plant.id };
        }
        return plant;
    })
    res.send({ });
});

app.delete("/plants/:id", (req, res) => {
    const id = Number(req.params.id);
    carniPlants = carniPlants.filter(plant => plant.id !== id);
    res.send({ "message": "Plant to be deleted is ID = " + id });
});

const port = process.env.port || 8080

app.listen(port, (err) => {
    if (err) console.log(err);
    else console.log("Listening on port", Number(port));
});