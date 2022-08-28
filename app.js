const express = require("express");
const mysql = require("mysql2");
require('dotenv').config()
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

const corsOptions = {
    origin: '*',
    credentials: true,
    optionSuccessStatus: 200,
}

app.use(cors(corsOptions));
app.use(bodyParser.json());
let port = process.env.PORT || 3000;

// Database

const db = mysql.createPool({
    connectionLimit: 10,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: "3306"
});

app.get("/", (req, res) => {
    res.send("Centralis REST API");
});

app.listen(port, () => {
    console.log("Server running...");
});

app.get("/players", (req, res) => {
    let sql = "SELECT * FROM sorted_leaderboard LIMIT 10"
    db.query(sql, (err, result) => {
        if (err) {
            console.log(err);
            res.send({ success: false, message: "Could not find player information.", error: err });
            return;
        }
        res.send(result);
    })
});

app.get("/gameinformation", (req, res) => {
    let sql = "SELECT * FROM game_information"
    db.query(sql, (err, result) => {
        if (err) {
            console.log(err);
            res.send({ success: false, message: "Could not find game information.", error: err });
            return;
        }
        res.send(result);
    })
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