const express = require("express");
const graphql = require("graphql");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schemas/index");
const app = express();
const connectDB = require("./config/db");
const cors = require("cors");

app.use(
  cors({
    origin: "http://localhost:8000",
  })
);

connectDB();
app.all(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);

app.listen(process.env.PORT || 3000, () =>
  console.log(`Hello world app is listening!`)
);
