const db = require("./connection").connection;

/* db.query('INSERT INTO actors (name, height) VALUES (?, ?)', ["Chris Hemsworth", 190], (error, result, fields) => {
    console.log(result);
}); */

db.query('SELECT * FROM actors', (error, result, fields) => {
    console.log(result);
});