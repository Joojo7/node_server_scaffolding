const configMap = {
  development: require('./development'),
  local: require('./local'),
  production: require('./production'),
  staging: require('./staging'),
};

module.exports = Object.assign(
  require('./default'),
  configMap[process.env.NODE_ENV || 'local']
);
