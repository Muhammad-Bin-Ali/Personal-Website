const [Project, WorkPlace] = require("../../models/indexDB");

const resolvers = {
  Query: {
    projects: async (_, {}, { models }) => {
      const docs = await Project.find({});
      return docs;
    },
    workplaces: async (_, {}, { models }) => {
      const docs = await WorkPlace.find({});
      return docs;
    },
  },
  //   Mutation: {},
  Project: {},
  WorkPlace: {},
};

module.exports = resolvers;
