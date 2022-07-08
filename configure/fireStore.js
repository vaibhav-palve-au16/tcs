const admin = require('./firebase');

const rdbFireStoreInstance = admin.firestore();

rdbFireStoreInstance.settings ({ ignoreUndefinedProperties: true})

module.exports = rdbFireStoreInstance