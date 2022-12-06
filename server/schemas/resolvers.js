const { Tech, Matchup } = require('../models');

const resolvers = {
  Query: {
    getAllMatchup: async () => {
      return await Matchup.find().populate('Matchup').populate({
        path: 'Matchup',
        populate: 'Matchup'
      });
    },
    getMatchup: async (parent,  args ) => {
      return Matchup.findOne( args._id ).populate('Matchup');
    },
  },
};

module.exports = resolvers;
