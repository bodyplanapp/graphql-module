const { mergeTypes } = require('merge-graphql-schemas');

const User = require('./user');
const Trainer = require('./trainer');

const types = [
    User,
    Trainer,
];

module.exports = mergeTypes(types, { all: true })
