var express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");

const util = require("./util");
const res = require("express/lib/response");
require('dotenv').config();

var app = express();
app.use(bodyParser.json());

// Database

const db = mysql.createConnection( {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

db.connect((err) => {
    if(err) {
        console.log(err);
        res.send({success: false, message: "Could not connect to database.", error: err});
        return;
    }
    console.log("MYSQL Connected.")
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});

// Routes

// app.get("/createdb", (req, res) => {
//     let sql = "CREATE DATABASE centrali_uhc_information";
//     db.query(sql, (err, result) => {
//         if(err) {
//             console.log(err);
//             res.send({success: false, message: "Could not create database.", error: err});
//             return;
//         } else {
//         res.send("Database centrali_uhc_information created.")
//         }
//     })
// });

// app.get("/createtable", (req, res) => {
//     let sql = "CREATE TABLE player_statistics (name VARCHAR(48), id INT(10) UNIQUE)";
//     db.query(sql, (err, result) => {
//         if(err) {
//             console.log(err);
//             res.send({success: false, message: "Could not create table.", error: err});
//             return;
//         } else {
//         res.send("Table player_statistics created.")
//         }
//     })
// });

// app.post("/players", (req, res) => {
//     if(util.onlyLetters(req.body.name) && util.onlyNumbers(req.body.id)) {
//         let data = {name: req.body.name, id: req.body.id};
//         let sql = "INSERT INTO player_statistics SET ?";
//         db.query(sql, data, (err) => {
//             if(err) {
//                 console.log(err);
//                 res.send({success: false, message: "Could not add player.", error: err});
//                 return;
//             } else {
//             res.send("Added player successfully.")
//             }
//         })
//     } else {
//         res.send({success: false, message: "Player name can only contain letters. ID can only contain numerical values."});
//         return;
//     }
// });

// app.put("/players", (req, res) => {
//     if(util.onlyLetters(req.body.name) && util.onlyNumbers(req.body.id)) {
//         let data = {name: req.body.name, id: req.body.id};
//         let sql = `UPDATE player_statistics SET name="${data.name}" WHERE id="${data.id}"`;
//         db.query(sql, data, (err) => {
//             if(err) {
//                 console.log(err);
//                 res.send({success: false, message: "Could not update player's name.", error: err});
//                 return;
//             }
//             res.send("Updated player's name.")
//         })
//     } else {
//         res.send({success: false, message: "Player name can only contain letters. ID can only contain numerical values."});
//         return;
//     }
// });

// app.delete("/players", (req, res) => {
//     if(util.onlyNumbers(req.body.id)) {
//         let data = {id: req.body.id};
//         let sql = `DELETE FROM player_statistics WHERE id="${data.id}"`;
//         db.query(sql, data, (err) => {
//             if(err) {
//                 console.log(err);
//                 res.send({success: false, message: "Could not delete player.", error: err});
//                 return;
//             } else {
//             res.send("Deleted player.")
//             }
//         })
//     } else {
//         res.send({success: false, message: "ID can only contain numerical values."});
//         return;
//     }
// });

app.get("/players", (req, res) => {
    let sql = "SELECT * FROM player_statistics";
    db.query(sql, (err, result) => {
        if(err) {
            console.log(err);
            res.send({success: false, message: "Could not find player information.", error: err});
            return;
        }
        res.send(result);
    })
});