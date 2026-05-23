const express = require("express");

const path = require("path");

const { v4: uuidv4 } = require("uuid");

const cors = require("cors");

const app = express();

const methodOverride = require("method-override");

app.use(methodOverride("_method"));

app.use(cors());

app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({extended : true}));
app.use(express.json());


let posts = [
    {
        id : uuidv4(),
        username : "Murari",
        content : "Is travis Head trying to remember virat the BGT Dismissals"
    },
    {
        id : uuidv4(),
        username : "apnacollege",
        content : "Hard work is important"
    },
    {
        id : uuidv4(),
        username : "VIT",
        content : "Your backlog fee now has increased to 8000"
    }
];

port = 3000;

app.listen(port, (req, res) => {
    console.log(`Server is listening on ${port}`);
})

app.get("/posts", (req, res) => {
    res.render("index.ejs", {posts})
})

app.get("/posts/new", (req,res) => {
    res.render("form.ejs");
})

app.get("/posts/:id", (req, res) => {
    let {id} = req.params;
    let requiredPost = posts.find((p) => {return id == p.id});
    res.render("show.ejs", {post : requiredPost})
})

app.post("/posts", (req, res) => {
    console.log(req.body);
    let {username, content} = req.body;
    let id = uuidv4();
    posts.push({"id": id, "username" : username, "content" : content});
    res.redirect("http://localhost:3000/posts");
})

app.patch("/posts/:id", (req, res) => {
    let {id} = req.params;
    let requiredPost = posts.find((p) => {return id == p.id});
    let newContent = req.body.content;
    requiredPost.content = newContent;
    res.redirect("/posts");
})

app.get("/posts/:id/edit", (req, res) => {
    let {id} = req.params;
    let requiredPost = posts.find((p) => {return id == p.id});
    res.render("edit.ejs", {post : requiredPost});

})

app.delete("/posts/:id/", (req, res) => {
    let {id} = req.params;
    posts = posts.filter((p) => {return id != p.id});
    res.redirect("/posts");
})