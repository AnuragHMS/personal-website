const express = require('express');


var app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.static("public/src/images"));

app.get("/", (req, res) => {
    res.locals.title = "AS > Home";
    res.locals.styleSheet = "styles.css";
    res.locals.active="home";
    res.render("landing");
})

app.get("/about", (req, res) => {
    res.locals.title = "AS > About";
    res.locals.styleSheet = "styles.css";
    res.locals.active="about";
    res.render("about");
});

app.get("/contact", (req, res) => {
    res.locals.title = "AS > Contact Me";
    res.locals.styleSheet = "styles.css";
    res.locals.active="contact";
    res.render("contact");
});

app.listen(3000, () => {
    console.log("Server starting...");
});