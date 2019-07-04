const { ObjectId } = require('mongodb');
const { updateModel } = require('../model');
const connect = require('../../../clients/mongodb');
const collections = require('../../../enums/collections');
const findOne = require('./findOne');

module.exports = (id, listToUpdate) => {
  return updateModel.validate()
    .then(() => connect())
    .then(db => db.collection(collections.USERS))
    .then(collection => collection.updateOne({ _id: ObjectId(id) }, { $set: listToUpdate }))
    .then((dbResponse) => {
      if (dbResponse.matchedCount === 1) {
        return findOne(id);
      }

      const err = new Error('Not Found');
      err.status = 404;
      throw err;
    });
};
