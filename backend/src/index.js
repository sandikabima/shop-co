const express = require("express")
const app = express()
const port = process.env.PORT || 5000;
const router = require("./router")
const cors = require("cors")
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser");

app.use(cookieParser())
app.use(
    cors({
        origin: "http://localhost:5173",
        methods: ["GET", "POST", "DELETE", "PUT"],
        allowedHeaders: [
            "Content-Type",
            "Authorization",
            "Cache-Control",
            "Expires",
            "Pragma",
        ],
        credentials: true,
    })
)

app.use(bodyParser.json())
app.use(express.json())

app.use(router)

app.listen(port, () => {
    console.log(`Server listening at port ${port}`)
})