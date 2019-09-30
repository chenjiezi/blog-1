const queryString = require('querystring')
const { get, set } = require('./src/db/redis')
const handleBlogRouter = require('./src/router/blog')
const handleUserRouter = require('./src/router/user')

// session 数据
// const SESSION_DATA = {}

// 获取 cookie 的过期时间
const getCookieExpires = () => {
	const d = new Date()
	d.setTime(d.getTime() + (24 * 60 * 60 * 1000))
	// console.log('d.toGMTString(): ', d.toGMTString())
	return d.toGMTString()
}

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

	// 解析 cookie
	const cookieStr = req.headers.cookie || ''
	req.cookie = {}
	cookieStr.split(';').forEach(item => {
		if (!item) {
			return
		}
		const arr = item.split('=')
		const key = arr[0].trim()
		const value = arr[1].trim()
		req.cookie[key] = value
	})
	// console.log('req.cookie: ', req.cookie)

	// // 解析 seesion
	// let needSetCookie = false
	// let userId = req.cookie.userid
	// if (userId) {
	// 	if (!SESSION_DATA[userId]) {
	// 		SESSION_DATA[userId] = {}
	// 	}
	// 	// console.log('SESSION_DATA is', SESSION_DATA)
	// } else {
	// 	needSetCookie = true
	// 	userId = `${Date.now()}_${Math.random()}`
	// 	SESSION_DATA[userId] = {}
	// }
	// req.session = SESSION_DATA[userId]

	// 解析 session (使用 redis)
	let needSetCookie = false
	let userId = req.cookie.userid
	if (!userId) {
		needSetCookie = true
		userId = `${Date.now()}_${Math.random()}`
		// 初始化 redis 中的 session 值
		set(userId, {})
	}
	// 获取 session
	req.sessionId = userId
	get(req.sessionId).then(sessionData => {
		if (sessionData == null) {
			// 初始化 redis 中 session 值
			set(req.sessionId, {})
			// 设置 session
			req.session = {}
		} else {
			// 设置 session
			req.session = sessionData
		}
		console.log('req.session ', req.session)

		// 处理 post data
		return getPostData(req) // FIXME: 把两个 promise 连接起来的操作!惊艳~~~~~~~~~~~~~~~~~~~~~~
	}).then(postData => {
		req.body = postData

		// 处理 blog 路由
		const blogResult = handleBlogRouter(req, res)
		if (blogResult) {
			blogResult.then(blogData => {
				if (needSetCookie) {
					res.setHeader('Set-Cookie', `userid=${userId}; path=/; httpOnly; expires=${getCookieExpires()}`)
					// 设置 path=/ 该域名的子路径也会有同个cookie ; 设置 httpOnly 的作用是只能在server端进行修改cookie\限制客户端修改
				}
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
				if (needSetCookie) {
					res.setHeader('Set-Cookie', `userid=${userId}; path=/; httpOnly; expires=${getCookieExpires()}`)
				}
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
