var mysql = require('mysql');

var pool  = mysql.createPool({
  host     : '127.0.0.1',
  user     : 'root',
  // password : '970888735',
  password : 'root1234',
  database : 'blog_view',
  port     : '3306'
});

let query = ( sql, values="") => {

  return new Promise(( resolve, reject ) => {
    pool.getConnection( (err, connection) => {
      if (err) {
        reject( err )
      } else {
        connection.query(sql, values, ( err, rows) => {
          if ( err ) {
            reject( err )
          } else {
            resolve( rows )
          }
          connection.release()
        })
      }
    })
  })

}

exports.findSimpleData = (id = 1) => { /* 查找 */
  let _sql = `select * from simple where id = ${id}`
  return query(_sql)
}

exports.findBlogList = (id = 1) => { /* 列表 */
  let _sql = `select * from blog_list_show`
  return query(_sql)
}

exports.addBlogData = (name, title, content) => { /* 添加 */
  let _sql = `INSERT INTO blog_list_show(name, title, content) VALUES('${name}','${title}','${content}')`
  return query(_sql)
}

exports.delBlogData = (id) => { /* 删除 */
 let _sql = `delete from blog_list_show where id=${id}`
 return query(_sql)
}

exports.updateBlogData = (data) => { /* 更新 */
  let _sql = `update blog_list_show set name="${data.name}", title="${data.title}", content="${data.content}" where id = ${data.id}`
  return query(_sql)
}

exports.SearchList = (id) => {
  let _sql = `select * from blog_list_show where id >= ${id ? id : 1}`
  return query(_sql)
}