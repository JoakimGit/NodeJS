const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017";
const dbName = "movies";

MongoClient.connect(url, { useUnifiedTopology: true } , (error, client) => {
    if (error) {
        throw error
    }
    const db = client.db(dbName);
    const actors = db.collection("actors");

    actors.find({}).toArray((error, data) => {
        console.log(data);
        client.close();
    })
})