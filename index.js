// Express.js is a fast, unopinionated, and minimalist web framework for Node.js. It simplifies building server-side applications and APIs by providing robust features for routing, middleware, request handling, and more.
// ensure that you have Node.js installed. 
// To check if you have Node.js installed, run this command in your terminal:
// node -v
// If you see a version number, then you have Node.js installed. If you see an error, you need to install Node.js.
// mkdir my-express-app
// cd my-express-app
// npm init -y  # Initialize a new project
// npm install express  # Install Express.js
// touch index.js

const express = require("express");// Express module ko import kiya
const app = express();// express() ka instance store kiya
// Express ko Directly Store Karne Se Alag express() instance se sessions, middlewares ya database connections me conflicts ho sakte hain.

const port = 8080;
// const path = require("path");

// A view engine in Express allows you to dynamically generate HTML content using templates. Instead of manually writing full HTML pages, you can use a templating engine like EJS, Pug, or Handlebars to dynamically inject data into templates.

app.set("view engine", "ejs");//This line tells Express to use EJS as the default templating engine. After setting this, Express will automatically render .ejs files when using res.render().

//First, install EJS using npm:npm install ejs

app.get("/rolldice", (req, res) => {
    let num = Math.floor(Math.random() * 6) + 1;
    res.render("rolldice.ejs", { num });
});//The app.get() method defines a route for handling HTTP GET requests. The first argument is the route (in this case, /rolldice), and the second argument is a callback function that takes a request and a response object as arguments.


app.get("/followers/:username", (req, res) => {//http://localhost:3000/followers/johndoe
    // const followers = ["dksl", "djksl", "kdld", "kdslsd", "kdsl"];
    let { username } = req.params;
    res.render("followers.ejs", { username, followers });
});
app.get("/", (req, res) => {
    res.render("home.ejs");
});

// You can have multiple parameters in a route:
// app.get("/followers/:username/:limit", (req, res) => {
//     const { username, limit } = req.params;
//     res.send(`Fetching ${limit} followers for ${username}`);
//   });
  
app.get("/inst/:username", (req, res) => {
    let { username} = req.params;
    //localhost:3000/inst/cats
    //req.params is a JavaScript object that holds key-value pairs, where the keys are the names of the route parameters, and the values are the corresponding values from the URL. /user/:id where :id is a dynamic parameter.
// http://localhost:3000/user/123, Express will set req.params.id = 123.
    
    const instadata = require("./data.json");
    const data = instadata[username];
    console.log(data);
    res.render("inst.ejs", { data });

});
app.listen(port, () => {
    console.log(`listening on port ${port}`);

});