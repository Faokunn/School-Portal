const express = require("express");
const cors = require("cors");
const connectDB = require("./core/database/db");
const studentRoutes = require("./routes/studentRoute");

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    console.log("Received request on /");
    res.send("HELLO WORLD");
});

app.use("/students", studentRoutes);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: "Something went wrong!", code: 500 });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});