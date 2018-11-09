const Router = require('koa-router')
const controller = require('../controller/content')
const json = require('../db/db.json')

const route = new Router({
  prefix: '/isting'
})

// POST  GET  DELETE PUT
route.get('/', (ctx, next) => {
  ctx.body = '首页'
})

route.get('/login', (ctx, next) => {
  ctx.body = '登录'
})

route.get('/content', 
  (ctx, next) => {
    ctx.response.type = 'json';
    ctx.response.body = {
      statusCode: '200',
      data: json
    };
  })
  
route.get('/title', controller.getTitle)
route.get('/list', controller.getList)

/* 添加数据 */
route.post('/addlist', controller.addlist)
/* 删除数据 */
route.delete('/dellist', controller.dellist)

/* 搜索数据 */
route.get('/getSearchData', controller.SearchData)

/* 更新数据 */
route.put('/updateData', controller.updateDataList)

module.exports = route
// router.redirect('/login', 'sign-in'); // 重定向