const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const importData = require("./data.json");
const corsOptions = {
    origin: '*',
    credentials: true,
    optionSuccessStatus: 200,
}
app.use(cors(corsOptions));
app.use(bodyParser.json());
let port = process.env.PORT || 3001;

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.get("/message", (req, res) => {
    res.json({ message: "Hello from server!" });
});

app.get("/apiData", (req, res) => {
    res.send(importData);
});

app.post("/apiData", (req, res) => {
    let objectData = {
        "name": req.body.name,
        "wins": req.body.wins,
        "kills": req.body.kills,
        "deaths": req.body.deaths
    }
    importData.push(objectData);
    res.send("Successful");
});

app.listen(port, () => {
    console.log("API app listening on port 3001");
});