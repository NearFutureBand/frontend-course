const Koa = require('koa');
const app = new Koa();

const AuthRouter = require('./src/modules/Auth');

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
const UsersRouter = require('./src/modules/Users');
app.use(UsersRouter.routes());

app.use(AuthRouter.routes());

app.listen(3001, () => {
  console.log(`Server's running on a 3001 port`);
});