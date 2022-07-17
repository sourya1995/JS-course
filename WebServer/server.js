const { response } = require("express");
const express = require("express");
const app = express();
const multer = require("multer");
const upload = multer();
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();

app.get("/", (request, response) => {
    response.send("Hello from express!");
});

const listener = app.listen(process.env.PORT || 3000, () => {
    console.log(`Your app is listening on port: ${listener.address().port}`);
});

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

const musicians = [{id:1, name:"Rahul Sharma", song:"Raag Bahar"}, 
{id:2, name: "Ravi Shankar", song: "Banaras Ghat"},
{id:3, name: "Ludwig van Beethoven", song:"Fur Elise"},
{id:4, name: "Julie Andrews", song: "The Hills Are Alive"},
{id:5, name: "John Lennon", song: "Imagine"}
];

app.get("/api/musicians", (request, response) => {
    response.json(musicians);
});

app.post("/animals", upload.array(), (request, response) => {
    const name = request.body.name;
    const vote = request.body.strongest;
    response.send(`Hello ${name}, you voted: ${vote}`);
});


app.post("/api/cars", jsonParser, (request, response) => {
    const cars = request.body;
    response.send(`You sent me a list of cars: ${JSON.stringify(cars)}`);
});

app.get("/hello", (request, response) => {
    response.sendFile(`${__dirname}/index.html`);
});
