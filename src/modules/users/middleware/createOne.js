const bcrypt = require('bcrypt');
const createOne = require('../services/createOne');

module.exports = (req, res, next) => {
  const userToCreate = req.body;
  bcrypt.genSalt(10, (salt) => {
    bcrypt.hash(userToCreate.password, salt, (err, hash) => {
      userToCreate.password = hash;
      createOne(userToCreate)
        .then((user) => {
          res.json(user);
        })
        .catch(() => {
          next(err);
        });
    });
  });
};
