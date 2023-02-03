const path = require("path");
const { loadFilesSync } = require("@graphql-tools/load-files");
const { mergeTypeDefs } = require("@graphql-tools/merge");
const resolvers = require("./resolvers/resolvers");
const { makeExecutableSchema } = require("@graphql-tools/schema");

const typesArray = loadFilesSync(path.join(__dirname, "./TypeDefs/*.graphql"), {
  extensions: ["graphql"],
});
const typeDefs = mergeTypeDefs(typesArray);

const schema = makeExecutableSchema({ typeDefs, resolvers });

module.exports = schema;