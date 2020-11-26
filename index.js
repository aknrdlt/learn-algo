const express = require('express');
const app = express();
const path = require('path');

// viewed at http://localhost:8080
app.use(express.static(path.join(__dirname)));

app.listen(8080);