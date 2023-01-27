const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/testing", (req, res) => {
  console.log(req.body.book);
});

app.listen(port, () =>
  console.log(`Hello world app listening on port ${port}!`)
);
