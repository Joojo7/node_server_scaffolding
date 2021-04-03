const Firestore = require('@google-cloud/firestore');

const dbs = {
  default: new Firestore(),
};

function init(projectId) {
  if (!dbs[projectId]) {
    dbs[projectId] = new Firestore({
      projectId,
    });
  }

  return dbs[projectId];
}

module.exports = {
  default: dbs.default,
  init,
};
