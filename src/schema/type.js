const { mergeTypes } = require('merge-graphql-schemas');
const { transpileSchema } = require('graphql-s2s').graphqls2s

const User = require('./user');
const Trainer = require('./trainer');

const types = [transpileSchema(User.concat(Trainer))];

module.exports = mergeTypes(types, { all: true });
