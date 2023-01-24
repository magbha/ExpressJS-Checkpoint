const express = require("express");
const app = express();

const pug = require("pug");
const workingHours = require("./middleware/Workhours");
app.use(express.static("public"))

app.set("view engine", "pug");
app.set("views", "views");

app.get("/", workingHours ,  function (req, res) {
  res.render("index" , {
    title :  "Home Page"
  });
});

app.get("/errorpage" ,  function (req, res) {
  res.render("errorpage" , {
    title :  "Error"
  });
});

app.get("/services", workingHours ,  function (req, res) {
  res.render("services" , {
    title :  "Our Services"
  });
});

app.get("/contact", workingHours ,  function (req, res) {
  res.render("contact" , {
    title :  "Contact Us"
  });
});

const PORT = 2023;


app.listen(PORT , error => {
    if (error) {
        console.log(error)
    }
    else {
        console.log("server is working" )
    }
})
