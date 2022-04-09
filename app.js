const express = require('express')
const app = express()
const path = require('path');

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/dist/index.html'));
});
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/dist/css/styles.css")

});
app.listen(3000)
  console.log("Server is running at port 3000")