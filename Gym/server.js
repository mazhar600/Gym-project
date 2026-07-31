const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// 1. MongoDB Connection
mongoose.connect('mongodb://localhost:27017/gymDB', )
   


.then(() => console.log("Connected to MongoDB successfully!"))
.catch((err) => console.log("MongoDB connection error:", err));

// 2. Data Schema
const contactSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String,
    date: { type: Date, default: Date.now }
});

const Contact = mongoose.model('Contact', contactSchema);

// 3. Form Submit Route
app.post('/submit-form', async (req, res) => {
    try {
        const { name, email, message } = req.body;

        const newContact = new Contact({
            name,
            email,
            message
        });

        await newContact.save();

        console.log("Data saved to MongoDB:", { name, email, message });
        res.send(`Thank you ${name}, your message has been saved to the database successfully!`);
    } catch (error) {
        console.log("Error saving data:", error);
        res.send("Something went wrong!");
    }
});

// Server Start
app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});