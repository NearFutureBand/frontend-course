const Router = require('koa-router');
const router = new Router();

const USERS_DATA = require('../mockData/usersData.json');

router.get('/users', async (ctx) => {
  ctx.status = 200;
  ctx.body = USERS_DATA;
});

router.get('/users/:id', async (ctx) => {
  try {
    const { id } = ctx.params;
    if (id > USERS_DATA.length) {
      throw new Error('max id of user is 8');
    }

    ctx.status = 200;
    ctx.body = USERS_DATA[id];
  } catch (err) {
    console.log(err);
    ctx.body = err;
  }
});

module.exports = router;