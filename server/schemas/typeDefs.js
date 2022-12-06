const { gql } = require('apollo-server-express');


const typeDefs = gql`
  type Matchup {
    tech1: String
    tech2: String
    tech1_votes: Int
    tech2_votes: Int
  }

  type Tech {
    name: String
  }

  type Query {
    getAllMatchup: [Matchup]
    getMatchup(id: ID!): Matchup
  }
`;

module.exports = typeDefs;