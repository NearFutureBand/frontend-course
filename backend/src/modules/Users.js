const Router = require('koa-router');
const router = new Router();

const { getUsers, getUserByIndex } = require('../queries/Users');
const { handleError } = require('../helpers');

router.get('/users', async (ctx) => {
  try {
    const result = await getUsers();
    ctx.status = 200;
    ctx.body = result;
  } catch (err) {
    handleError(err, ctx);
  }
});

router.get('/users/:index', async (ctx) => {
  try {
    const { index } = ctx.params;
    const result = await getUserByIndex(index);
    if (!result) {
      throw new Error('Пользователя с таким index не существует');
    }
    ctx.status = 200;
    ctx.body = result;
  } catch (err) {
    handleError(err, ctx);
  }
});

module.exports = router;