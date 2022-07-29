const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const importData = require("./data.json");
const corsOptions ={
    origin:'*', 
    credentials:true,
    optionSuccessStatus:200,
}
app.use(cors(corsOptions));
app.use(bodyParser.json());
let port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.get("/apiData", (req, res) => {
    res.send(importData);
});

app.post("/apiData", (req, res) => {
    let objectData = {
        "name": req.body.name,
        "id": req.body.id
    }
    importData.push(objectData);
    res.send("Successful");
});

app.listen(port, () => {
    console.log("API app listening on port 3000");
});