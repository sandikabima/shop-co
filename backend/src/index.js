const express = require("express")
const app = express()
const port = process.env.PORT || 5000;

app.get("/ping", (req, res) => {
    res.send("pong")
})

app.listen(port, () => {
    console.log(`Server listening at port ${port}`)
})