const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const server = express();
server.use(express.json());

const port = process.env.PORT || 8989;

server.listen(port, () => {
    console.log("listening to port", port);
})

server.get("/fibonacci/:upto", (req, res) => {
    const upto = req.params.upto;
    res.send(fibonacci(upto));
})