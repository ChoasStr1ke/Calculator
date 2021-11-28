const express = require("express");
const app = express();


app.use(express.static(__dirname));
app.set("view engine", "ejs")

app.get('/', (req, res) => {
    res.render("home");
});

app.get("/posts", (req, res) => {
    res.send("we are posts");
})

app.listen(3000);