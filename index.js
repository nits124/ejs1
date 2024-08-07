const express = require("express");
const app = express();
const port = 8080;
app.set("view engine", "ejs");
app.get("/rolldice", (req, res) => {
    let num = Math.floor(Math.random() * 6) + 1;
    res.render("rolldice.ejs", { num });
});

app.get("/followers/:username", (req, res) => {
    const followers = ["dksl", "djksl", "kdld", "kdslsd", "kdsl"];
    let { username } = req.params;
    res.render("followers.ejs", { username, followers });
});
app.get("/", (req, res) => {
    res.render("home.ejs");
});
app.get("/inst/:username", (req, res) => {
    let { username} = req.params;
    const instadata = require("./data.json");
    const data = instadata[username];
    console.log(data);
    res.render("inst.ejs", { data });

});
app.listen(port, () => {
    console.log(`listening on port ${port}`);

});