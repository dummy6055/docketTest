const express = require("express"); 
const app = express();             
const port = 5000; 

app.get("/", (req, res) => {
    res.json({"success":true,"message":"Arpit and N pawan kumar backend server is up","version":null,"env":"development"})     
});

app.get("/web", (req, res) => {
    res.sendFile('index.html', {root: __dirname});      
});

app.listen(port, () => {         
    console.log(`Now listening on port ${port}`); 
});