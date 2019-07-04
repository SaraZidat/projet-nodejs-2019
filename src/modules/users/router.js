const { Router } = require('express');
const find = require('./middleware/find');
const findOne = require('./middleware/findOne');
const createOne = require('./middleware/createOne');
const deleteOne = require('./middleware/deleteOne');
const updateOne = require('./middleware/updateOne');

const router = new Router();

router.route('/users')
  .post(createOne)
  .get(find);

router.route('/lists/:listId/tasks/:taskId')
  .delete(deleteOne)
  .patch(updateOne)
  .get(findOne);


module.exports = router;
