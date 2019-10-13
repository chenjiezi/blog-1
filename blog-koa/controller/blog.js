const xss = require('xss')
const { exec } = require('../db/mysql')

const getList = async (keyword) => {
  let sql = `select * from blogs where 1=1` // 拼接 sql 小技巧
  if (keyword) {
    sql += `and title like '%${keyword}%'`
  }
  sql += `order by createtime desc;` // desc 降序 / asc 升序
  return await exec(sql)
}

const getDetail = async (id) => {
  let sql = `select * from blogs where id=${id}`
  const rows = await exec(sql) // sql 查询的结果为数组
  return rows[0]
}

const newBlog = async (blogData = {}) => {
  const title = xss(blogData.title)
  const content = xss(blogData.content)
  const createTime = Date.now()
  const type = blogData.type
  const label = blogData.label

  const sql = `
    insert into blogs (title, content, createtime, type, label)
    values ('${title}', '${content}', ${createTime}, '${type}', '${label}');
  `

  const insertData = await exec(sql)
  return {
    id: insertData.insertId
  }
}

const updateBlog = async (id, blogData = {}) => {
  const title = xss(blogData.title)
  const content = xss(blogData.content)
  const type = blogData.type
  const label = blogData.label

  const sql = `
    update blogs set title='${title}', content='${content}',
    type='${type}', label='${label}' where id=${id};
  `

  const updateData = await exec(sql)
  if (updateData.affectedRows > 0) {
    return true
  }
  return false
}

const delBlog = async (id) => {
  const sql = `delete from blogs where id='${id}' and author='${author}';`
  const delData = await exec(sql)
  if (delData.affectedRows > 0) {
    return true
  }
  return false
}

module.exports = {
  getList,
  getDetail,
  newBlog,
  updateBlog,
  delBlog
}