const { exec } = require('../db/mysql')

const getList = (author, keyword) => {
	let sql = `select * from blogs where 1=1 ` // 小技巧 : 1=1的写法可以简化步骤
	if (author) {
		sql += `and author='${author}' `
	}
	if (keyword) {
		sql += `and title like '%${keyword}%' `
	}
	sql += `order by createtime desc;`

	// 返回promise
	return exec(sql)
}

const getDetail = (id) => {
	const sql = `select * from blogs where id='${id}'`
	return exec(sql).then(rows => {
		// sql语句查询出来是个数组，即使数据只有一条
		return rows[0]
	})
}

const newBlog = (blogData = {}) => {
	// blogData 是一个博客对象，包含 title content 属性

	const title = blogData.title
	const content = blogData.content
	const author = blogData.author
	const createTime = Date.now()

	const sql = `
		insert into blogs (title, content, createtime, author)
		values ('${title}', '${content}', ${createTime}, '${author}')
	`

	return exec(sql).then(insertData => {
		// console.log('insertData is ', insertData)
		return {
			id: insertData.insertId
		}
	})
}

const updateBlog = (id, blogData = {}) => {
	const title = blogData.title
	const content = blogData.content

	const sql = `
		update blogs set title='${title}', content='${content}' where id = '${id}';
	`

	return exec(sql).then(updateData => {
		if (updateData.affectedRows > 0) {
			return true
		}
		return false
	})
}

const delBlog = (id, author) => {
	// id 就是要删除博客的 id
	const sql = `delete from blogs where id='${id}' and author='${author}';`
	return exec(sql).then(delData => {
		if (delData.affectedRows > 0) {
			return true
		}
		return false
	})
}

module.exports = {
	getList,
	getDetail,
	newBlog,
	updateBlog,
	delBlog
}
