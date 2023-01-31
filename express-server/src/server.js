const express = require("express");
const graphql = require("graphql");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schemas/index");
const app = express();
const PORT = 3000;
const connectDB = require("./config/db");

connectDB();
app.all(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);

app.listen(PORT, () =>
  console.log(`Hello world app listening on port ${PORT}!`)
);
