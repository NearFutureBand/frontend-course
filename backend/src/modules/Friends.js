const _ = require('lodash');
const Router = require('koa-router');
const router = new Router();

const { handleError, makeJWT, validateJWT, hash, extractPhoneNumberFromJwt, shortenUserInfo, hasUserThisFriend } = require('../helpers');
const { getUserByPhone, getUserByIndex, updateUserInformation } = require('../queries/Users');

/**
 * body: {
 *    token: string, - там телефон того кто добавляет в друзья
 *    index: number, - индекс того пользователя которого нужно добавить в друзья
 * }
 */
router.post('/add-friend', async (ctx) => {
  try {
    const { token, index } = ctx.request.body;
    if (!token) throw new Error('Нет токена текущего пользователя');
    if (!index) throw new Error('Нет идентификатора пользователя, который добавляется в друзья');

    // Берем пользователя из базы по его номеру телефона, который извлекаем из токена
    const user = await getUserByPhone(extractPhoneNumberFromJwt(token));

    // Проверить не совпадает ли индекс друга с нашим индексом
    if (user.index == index) throw new Error('Нельзя добавить себя в друзья');
    // Проверить есть ли уже такой друг
    if (hasUserThisFriend(user, index)) throw new Error('Этот пользователь уже есть в друзьях');

    // Получить по индексу юзера которого добавляем в друзья
    const _friend = await getUserByIndex(index);
    const friend = shortenUserInfo(_friend);

    // Добавть fiend в массив friends у user
    user.friends.push(friend);

    // Сохранить изменения
    await updateUserInformation(user);

    ctx.body = {
      text: 'OK'
    }
  } catch (err) {
    handleError(err, ctx);
  }
});


module.exports = router;