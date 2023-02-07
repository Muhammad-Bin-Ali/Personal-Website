const [Project, WorkPlace] = require("../../models/indexDB");

const resolvers = {
  Query: {
    projects: async (_, {}, { models }) => {
      const docs = await Project.find({});
      console.log(docs);
      return docs;
    },
    workplaces: async (_, {}, { models }) => {
      const docs = await WorkPlace.find({});
      console.log(docs);
      return docs;
    },
  },
  //   Mutation: {},
  Project: {},
  WorkPlace: {},
};

module.exports = resolvers;
