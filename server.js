const express = require("express");
const path = require("path");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;
const PASSWORD = process.env.PASSWORD;

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, "public")));

// Login route - process login form submission
app.post("/login", (req, res) => {
  const { password } = req.body;
  if (password === PASSWORD) {
    res.redirect("/dashboard.html");
  } else {
    // Send a simple error message with a link to go back
    res.send("Incorrect password. <a href='/'>Try again</a>.");
  }
});

// Serve the dashboard page from the "views" folder
app.get("/dashboard.html", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "dashboard.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
