const Koa = require('koa');
const app = new Koa();

const AuthRouter = require('./src/modules/Auth');
const UsersRouter = require('./src/modules/Users');
const FriendsRouter = require('./src/modules/Friends');

// cors
const cors = require('@koa/cors');
app.use(
  cors({
    origin: '*',
    allowHeaders: 'X-Requested-With, Content-Type, Origin',
    credentials: true,
  }),
);

// logger
const logger = require('koa-logger');
app.use(logger());

// bodyparser
const bodyParser = require('koa-bodyparser');
app.use(bodyParser());

// routes
app.use(UsersRouter.routes());
app.use(AuthRouter.routes());
app.use(FriendsRouter.routes());

app.listen(3001, () => {
  console.log(`Server's running on a 3001 port`);
});