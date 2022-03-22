const express = require("express");
const app = express();
const socket = require("socket.io");
const cors = require("cors");
var mysql = require("mysql");

app.use(express());

const port = 8000;

app.use(cors());

var server = app.listen(
  port,
  console.log(`Server is running on the port no: ${port} `)
);

const io = socket(server);

var connection = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "",
  database: "messenger-clone",
  charset: "utf8mb4",
});

connection.connect();

//initializing the socket io connection
io.on("connection", (socket) => {
  console.log("connected" + socket.id);
  socket.on("login", ({ username, password }) => {
    var stmtSelectUser = `SELECT * FROM users WHERE username = ? AND password = ?`;
    var selectUserValues = [username, password];

    connection.query(
      stmtSelectUser,
      selectUserValues,
      function (error, results, fields) {
        if (error) throw error;

        if (results.length === 1) {
          io.emit("userExist", true);
        } else {
          console.log("User doesn't exist");
        }
      }
    );
  });
});
