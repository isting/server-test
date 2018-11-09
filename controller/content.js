const querystring = require('querystring')
const { 
  findSimpleData, 
  findBlogList, 
  addBlogData,
  delBlogData,
  SearchList,
  updateBlogData
} = require('../lib/index')

exports.getTitle = async function(ctx, next) {
  let data =  await findSimpleData(1)
  ctx.body = {
    a: 1, b: 2, content: '标题',
    data: data
  }
}

exports.getList = async ( ctx ) => {
  let data = await findBlogList(1)
  ctx.body = {
    statusCode: 200,
    data: data
  }
}

exports.addlist = async ( ctx ) => {
  const {name, title, content} = ctx.request.body
  try {
      if(Boolean(name) && Boolean(title) && Boolean(content)) {
        let data = await addBlogData(name, title, content)
        ctx.body = {
          statusCode: 200,
          msg: '添加数据成功',
          data: data
        }
      } else {
        throw new Error('数据不完整', name && title && content)
      }
    } catch(err) {
      ctx.body = {
        statusCode: 0,
        msg: '添加数据失败',
        data: err
      }
    }


}

exports.dellist = async ( ctx ) => {
  if(ctx.request.body.id) {
    let data = await delBlogData(ctx.request.body.id)
    ctx.body = {
      statusCode: 200,
      data: {},
      msg: '删除成功！'
    }
  } else {
    ctx.body = {
      statusCode: 0,
      data: {},
      msg: '删除失败！'
    }
  }
}

exports.SearchData = async ( ctx ) => {
  try {
    let params = querystring.parse(ctx.request.url.split('?')[1])
    let data = await SearchList(params.id)
    ctx.response.body = {
      statusCode: 200,
      msg: '搜索成功',
      data
    }
  } catch(err) {
    ctx.response.body = {
      statusCode: 0,
      msg: '错误',
      data: []
    }
  }
}

exports.updateDataList = async ( ctx ) => {
  let params = ctx.request.body
  let data =  await updateBlogData(params)
  try {
    ctx.response.body = {
      msg: '更新成功',
      data: [],
      statusCode: 200
    }

  } catch(err) {
    ctx.response.body = {
      msg: '更新失败',
      data: [],
      statusCode: 200
    }
    throw new Error(err)
  }
}