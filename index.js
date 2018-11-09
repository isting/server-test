const Koa = require('koa');
const cors = require('koa-cors');
const bodyParser = require('koa-bodyparser');
const { port } = require('./config/default');
const app = new Koa()

/* 跨域 */
app.use(cors());
/* 接收post数据 */
app.use(bodyParser());
/* router */
// app.use(router.routes()).use(router.allowedMethods());
app.use(require('./routes/index').routes())

app.listen(port, ()=>{
    console.log(`服务启动成功  port ${port}`);
});