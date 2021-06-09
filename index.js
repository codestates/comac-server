const express = require("express");
const https = require('https');
const fs = require('fs');


const app = express();
const port = 80;

app.use(express.json())
app.get('/', (req, res) => {
  res.json('Hello World');
})
let server;
if (fs.existsSync("./key.pem") && fs.existsSync("./cert.pem")) {
  server = https
    .createServer(
      {
        key: fs.readFileSync(__dirname + `/` + 'key.pem', 'utf-8'),
        cert: fs.readFileSync(__dirname + `/` + 'cert.pem', 'utf-8'),
      },
      app
    )
    .listen(port, () => {
      console.log(`https server listening on ${port}`);
    });
} else {
  server = app.listen(port, () => {
    console.log(`http server listening on ${port}`);
  });
};
module.exports = server;
