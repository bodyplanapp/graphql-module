const _ = require('lodash');

const user = require('./user/resolvers');
const trainer = require('./trainer/resolvers');

const resolvers = _.merge(user, trainer)

module.exports = resolvers 