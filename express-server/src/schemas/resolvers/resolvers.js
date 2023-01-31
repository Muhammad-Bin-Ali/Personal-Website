const { Account } = require("../../models/project");

const resolvers = {
  Query: {
    accounts: async (_, {}, { models }) => {
      const docs = await Account.find({});
      return docs;
    },
  },
  //   Mutation: {},
  Project: {},
  WorkPlace: {},
  Account: {},
};

module.exports = resolvers;
