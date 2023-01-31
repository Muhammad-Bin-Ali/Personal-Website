const Account = require("../../models/indexDB");

module.exports = {
  Query: {
    accounts: (_, {}, { models }) => {
      console.log(models.Account.find());
      return models.Account.find({});
    },
  },
  //   Mutation: {},
  Project: {},
  WorkPlace: {},
  Account: {},
};
