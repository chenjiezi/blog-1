const { exec, escape } = require('../db/mysql')

const getList = async () => {
  const sql = `select * from blogs`
  return await exec(sql)
}

module.exports = {
  getList
}