//Dependencies 
const express = require('express');
const fs = require('fs');
const util = require('util');
const uniqid = require('uniqid');
const path = require('path');
//Initialize express
const app = express();
//Setting PORT
const PORT = process.env.PORT || 3001;
//Require json file
const notes = require('./db/db.json');
// Setup data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
//
app.get('/api/notes', (req, res) => {
    res.json(notes);
});
//Start with index page on localhost launch
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});
//Loading the notes html once button is clicked
app.get('/notes', function (req, res) {
    res.sendFile(path.join(__dirname, "/public/notes.html"));
})
//This will default to the index html if the 'url' doesn't match a valid one
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

app.post('/api/notes', (req, res) => {
    let jsonFilePath = path.join(__dirname, '/db/db.json');
    let newNote = req.body;
    newNote.id = uniqid();
    notes.push(newNote);

    fs.writeFile(jsonFilePath, JSON.stringify(notes), function (err) {
        if (err) {
            return console.log(err);
        }
        console.log('Note added successfully');
    });
    location.reload();
});

//Listener and console log with link to local host
app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT} 🚀`)
});