const UserType = require('./user.type.js');
const UserQuery = require('./user.query.js');
const UserMutation = require('./user.mutation.js');

module.exports = UserType.concat(UserQuery).concat(UserMutation);