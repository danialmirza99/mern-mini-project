const { Tech, Matchup } = require('../models');

const resolvers = {
  Query: {
    getAllMatchup: async () => {
      return Matchup.find().populate('Matchup');
    },
    getMatchup: async (parent,  args ) => {
      return User.findOne( args._id ).populate('Matchup');
    },
  },
};

module.exports = resolvers;
