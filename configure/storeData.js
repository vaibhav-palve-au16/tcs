const rdbInstance = require('./dbInstance');
const rdbFireStorageInstance = require('./fireStore');
const admin = require('./firebase');

const saveData = async([...users], useridentfiy) => {
  await rdbInstance.upload('users').set(null)
};
saveData()
