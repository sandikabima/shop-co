const express = require("express")
const app = express()
const port = process.env.PORT || 5000;
const router = require("./router")
const cors = require("cors")
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser");

const sequelize = require("./utils/conn");

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

router.get('/health', async (req, res) => {
    try {
        await sequelize.authenticate();
        res.status(200).json({ status: '✅ Database connected successfully' });
    } catch (error) {
        console.error('❌ Database connection error:', error);
        res.status(500).json({ status: '❌ Database connection failed', error: error.message });
    }
});

app.get("/ping", (req, res) => {
    res.send("pong")
})

app.listen(port, () => {
    console.log(`Server listening at port ${port}`)
})