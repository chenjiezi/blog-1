const mysql = require('mysql')

// 创建连接对象
const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  port: '3306',
  database: 'myblog'
})

// 开始连接
con.connect()

// 执行 sql 语句
const sql = 'select * from users';
// const sql = 'update users set realname="李四1" where username = "lisi"';
// const sql = `insert into blogs (title, content, createtime, author) values ('a', 'A', 1569662045965, '李四');`;
// const sql = `delete from blogs where author='李四'`;
con.query(sql, (err, result) => {
  if (err) {
    console.log(err)
    return
  }
  console.log(result)
})

// 关闭连接
con.end()