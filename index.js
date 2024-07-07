require("dotenv").config();
const express = require("express");
const app = express();
const port = 4000;

const gitData = {
    login: "As377507",
    id: 103307575,
    node_id: "U_kgDOBihZNw",
    avatar_url: "https://avatars.githubusercontent.com/u/103307575?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/As377507",
    html_url: "https://github.com/As377507",
    followers_url: "https://api.github.com/users/As377507/followers",
    following_url: "https://api.github.com/users/As377507/following{/other_user}",
    gists_url: "https://api.github.com/users/As377507/gists{/gist_id}",
    starred_url: "https://api.github.com/users/As377507/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/As377507/subscriptions",
    organizations_url: "https://api.github.com/users/As377507/orgs",
    repos_url: "https://api.github.com/users/As377507/repos",
    events_url: "https://api.github.com/users/As377507/events{/privacy}",
    received_events_url: "https://api.github.com/users/As377507/received_events",
    type: "User",
    site_admin: false,
    name: "Akash Sen",
    company: null,
    blog: "",
    location: "Kolkata",
    email: null,
    hireable: null,
    bio: "College Student \r\nFinalist of #SIH 2023\r\nMember of ACM Student Chapter ",
    twitter_username: null,
    public_repos: 2,
    public_gists: 0,
    followers: 0,
    following: 0,
    created_at: "2022-04-09T08:01:47Z",
    updated_at: "2024-06-22T19:26:19Z",
};

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
    res.send("Akashsencom");
});

app.get("/login", (req, res) => {
    res.send("<h1> Please enter your details </h1>");
});

app.get("/home", (req, res) => {
    res.send("<h1> hello welcome to our channel</h1>");
});


app.get("/github", (req, res) => {
    res.json(gitData);
});

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`);
});


