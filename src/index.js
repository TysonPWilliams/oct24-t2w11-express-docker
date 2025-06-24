const express = require("express");
const mongoose = require("mongoose");

// Require and immediately use vs require and save as variable
// const dotenv = require("dotenv");
// dotenv.config();
require("dotenv").config();

console.log("PORT is " + process.env.PORT);

let {
    PORT,
    NODE_ENV,
    DATABASE_URL
} = process.env;

console.log(PORT, NODE_ENV, DATABASE_URL);

if (PORT == undefined){
    PORT = 3001
}

const app = express();

app.get('/', (req, res) => {
    console.log("Homepage of API requested!");
    res.json({ message : "Hello world!"})
});

async function main() {
    await mongoose.connect(DATABASE_URL)
    console.log("Database connected");

    app.listen(PORT, () => {
    console.log("Server is listening on port http://localhost:" + PORT)
});
}

main();

// app.listen(3000, () => {
//     console.log("Server is listening on port 3000")
// });



