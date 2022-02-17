const Router = require('koa-router');
const router = new Router();

const { handleError, makeJWT, validateJWT, hash, extractPhoneNumberFromJwt } = require('../helpers');
const { getUserByPhone } = require('../queries/Users');

router.post('/auth/sign-in', async (ctx) => {
  try {
    const { phone, password, token } = ctx.request.body;

    const user = await getUserByPhone(token ? extractPhoneNumberFromJwt(token) : phone);
    if (!user) {
      throw new Error('Пользователь с таким номером телефона не найден');
    }

    if (token) {
      // validate token
      if (!validateJWT(token, user.phone)) {
        throw new Error('Токен некорректный или истек, пожалуйста, выполните вход');
      }
    } else {
      // token is undefined, check password
      if (!password) {
        throw new Error('Необходимо ввести пароль');
      }
      if (user.passwordHash !== hash(password)) {
        throw new Error('Пароль введен неверно');
      }
    }

    delete user.passwordHash;
    ctx.body = {
      ...user,
      token: makeJWT({ phone: user.phone }), // update JWT
    }
  } catch (err) {
    handleError(err, ctx);
  }
});

/*router.post('/auth/verify-code', async (ctx) => {
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