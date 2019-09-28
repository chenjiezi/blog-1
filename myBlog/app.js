const queryString = require('querystring')
const handleBlogRouter = require('./src/router/blog')
const handleUserRouter = require('./src/router/user')

// 用于处理 post data
const getPostData = (req) => {
	const promise = new Promise((resolve, reject) => {
		if (req.method !== 'POST') {
			resolve({})
			return
		}
		if (req.headers['content-type'] !== 'application/json') {
			resolve({})
			return
		}
		let postData = ''
		req.on('data', chunk => {
			// chunk是二进制数据
			postData += chunk.toString()
		})
		req.on('end', () => {
			if (!postData) {
				resolve({})
				return
			}
			resolve(
				JSON.parse(postData)
			)
		})
	})
	return promise
}

const serverHandle = (req, res) => {
	// 设置返回格式 JSON (告诉浏览器返回的数据为JSON格式)
	res.setHeader('Content-type', 'application/json')

	// 获取 path
	const url = req.url
	req.path = url.split('?')[0]

	// 解析 query
	req.query = queryString.parse(url.split('?')[1])

	// 处理 post data
	getPostData(req).then(postData => {
		req.body = postData

		// 处理 blog 路由
		const blogResult = handleBlogRouter(req, res)
		if (blogResult) {
			blogResult.then(blogData => {
				res.end(
					JSON.stringify(blogData)
				)
			})
			return
		}
		// const blogData = handleBlogRouter(req, res)
		// if (blogData) {
		// 	res.end(JSON.stringify(blogData))
		// 	return
		// }

		// 处理 user 路由
		const userResult = handleUserRouter(req, res)
		if (userResult) {
			userResult.then(userData => {
				res.end(
					JSON.stringify(userData)
				)
			})
			return
		}
		// const userData = handleUserRouter(req, res)
		// if (userData) {
		// 	res.end(JSON.stringify(userData))
		// 	return
		// }

		// 未命中路由，返回 404
		res.writeHead(404, { 'Content-type': 'text/plain' }) // 纯文本类型
		res.write('404 Not Found\n')
		res.end()
	})

}

module.exports = serverHandle

// process.env.NODE_ENV
