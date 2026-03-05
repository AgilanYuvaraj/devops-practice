const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Request logger middleware
app.use((req, res, next) => {
    console.log(`${req.method} request received at ${req.url}`);
    next();
});

// Default route
app.get("/", (req, res) => {
    res.json({
        message: "Welcome to my DevOps practice server",
        status: "Server is running"
    });
});

// Health check route (used in DevOps monitoring)
app.get("/health", (req, res) => {
    res.json({
        status: "UP",
        timestamp: new Date()
    });
});

// GET route
app.get("/get", (req, res) => {
    res.status(200).json({
        message: "GET request successful"
    });
});

// POST route
app.post("/post", (req, res) => {
    const data = req.body;

    res.status(200).json({
        message: "POST request successful",
        receivedData: data
    });
});

// Sample users API
app.get("/users", (req, res) => {
    const users = [
        { id: 1, name: "Agilan", role: "DevOps Intern" },
        { id: 2, name: "Admin", role: "Administrator" }
    ];

    res.json(users);
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
