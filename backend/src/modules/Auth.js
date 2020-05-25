const Router = require('koa-router');
const router = new Router();

const { handleError, makeJWT, validateJWT } = require('../helpers');

/*router.post('/auth/is-user-signed-in', async (ctx) => {
  try {
    const { phone, token } = ctx.request.body;
    const [user] = await getUserByPhone(phone);
    const isTokenValid = validateJWT(token, user.phone);
    if (!user || !isTokenValid) {
      ctx.status = 422;
      if (!user) {
        ctx.message = `User doesn't exist`;
        await createUser(phone);
      }
      if (!isTokenValid) ctx.message = 'Token is wrong or expired';

      const smsCode = '1q2q3';
      await setVeryfingCodeToUser({ phone, code: smsCode });
      console.log('smsCode: ', smsCode); // send sms to user
      return;
      // create user and send smsCode
    }

    ctx.body = {
      ...user,
      token: makeJWT({ phone: user.phone }), // update JWT
    }
  } catch (err) {
    handleError(err, ctx);
  }
});

router.post('/auth/verify-code', async (ctx) => {
  try {
    const { phone, smsCode } = ctx.request.body;

    if (!smsCode) {
      ctx.message = 422;
      ctx.message = 'Sms code cannot be NULL';
      return;
    }

    const [{ code }] = await getSmsCodeByPhone(phone);

    if (code !== smsCode) {
      ctx.status === 403;
      ctx.message = 'Sms code is wrong';
      return;
    }

    await setVeryfingCodeToUser({ phone });
    const [user] = await getUserByPhone(phone);

    ctx.code = 200;
    ctx.message = 'Code is correct';
    ctx.body = {
      ...user,
      token: makeJWT({ phone: user.phone }), // update JWT
    }
  } catch (err) {
    handleError(err, ctx);
  }
})*/



module.exports = router;