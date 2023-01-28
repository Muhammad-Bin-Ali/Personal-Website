const { Project } = require("../../models/project");

module.exports = {
  Query: {
    async account(_, {}, { models }) {
      return await models.Project.find();
    },
  },
  //   Mutation: {},
  Project: {},
  WorkPlace: {},
  Account: {},
};
