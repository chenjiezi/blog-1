const { exec, escape } = require('../db/mysql')

const login = async (username, password) => {
  username = escape(username)
  password = escape(password)
  // escape字符转义,给值自动添加单引号,如果值存在特殊符号,会给特殊符号转义,防止sql注入
  const sql = `
    select username, nickname from user where username=${username} and password=${password};
  `

  const rows = await exec(sql)
  return rows[0] || {}
}

module.exports = {
  login
}