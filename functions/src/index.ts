import express = require('express');
import { onRequest } from "firebase-functions/v2/https";

const app = express();

app.get('/api', (req, res) => {
    const date = new Date();
    const hours = (date.getHours() % 12) + 1;  // London is UTC + 1hr;
    res.send(`
      <!doctype html>
      <head>
        <title>Time</title>
        <link rel="stylesheet" href="/style.css">
        <script src="/script.js"></script>
      </head>
      <body>
        <p>In London, the clock strikes:
          <span id="bongs">${'BONG '.repeat(hours)}</span></p>
        <button onClick="refresh(this)">Refresh</button>
      </body>
    </html>`);
});

app.get('/home',(req, res) => {
  res.send(`<!doctype html>
  <head>
    <title>Time</title>
    <link rel="stylesheet" href="/style.css">
    <script src="/script.js"></script>
  </head>
  <body>
    <h1>Hello from home</h1>
  </body>
</html>`)
})


exports.app = onRequest(app);