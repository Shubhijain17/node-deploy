const express = require("express")
const app = express()

app.use(express.json())

app.get('/api/get', (req, res) => {
    res.send({ message: "hello this is CICd server" });
});

app.get('/api/get_users', (req, res) => {
    const users = [
        { id: 1, name: "shubhi", age: 22, contact: 12345678, address: "bhopal", role: "Backend Developer" },
    ];
    const role=[
        { id: 1, name: "shubhi", age: 22, contact: 12345678, address: "bhopal", role: "Backend Developer" },
        { id: 1, name: "soham", age: 22, contact: 12345678, address: "bhopal", role: "Backend Developer" },
    ]

    res.send({users, role,});
});

app.listen(8000, (err) => {
    if (err) {
        console.error("Error starting server:", err);
    } else {
        console.log('Server is running on port 8000 🐿');
    }
});
