//Dependencies 
const express = require('express');
const fs = require('fs');
const util = require('util');
const path = require('path');
//Initialize express
const app = express();
//Setting PORT
const PORT = process.env.PORT || 3001;
//Require routes file
const apiRoutes = require('./routes/routes.js');

// Setup data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

//Listener and console log with link to local host
app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT} 🚀`)
});
