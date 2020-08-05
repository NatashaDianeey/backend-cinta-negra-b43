const express = require("express");
const app = express();
const PORT = process.env.PORT;
const router = require("../routes");
const fileUpload = require('express-fileupload');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1", router);
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: '/tmp/'
}))

module.exports = { app, PORT };
