module.exports = {
  res: require('b2b-response'),
  experts: require('b2b-managers'),
  repositories: require('./repositories'),
  accessControl: require('b2b-access-control'),
  dbRedis: require('./redis-repositories'),
  luxon: require('luxon'),
};
