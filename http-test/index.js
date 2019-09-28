const http = require('http');
const queryString = require('querystring');
// get
// const server = http.createServer((req, res) => {
// 	console.log('method is ', req.method); // 请求方式 GET
// 	const url = req.url; // 获取请求的完成url
// 	req.query = queryString.parse(url.split('?')[1]); // 解析queryString
// 	console.log('url: ', url);
// 	console.log('req.query:', req.query);
// 	res.end(JSON.stringify(req.query)); // 将queryString返回
// });

// server.listen(8000, () => {
// 	console.log('url:http://localhost:8000');
// });

// post
// const server = http.createServer((req, res) => {
// 	if (req.method === 'POST') {
// 		// req 数据格式
// 		console.log('req content-type: ', req.headers['content-type']);
// 		// 接受数据
// 		let postData = '';
// 		req.on('data', chunk => {
// 			postData += chunk.toString();
// 		});

// 		req.on('end', () => {
// 			console.log('postData: ', postData);
// 			res.end('end!');
// 		});
// 	}
// });

// server.listen(8000, () => {
// 	console.log('http://localhost:8000');
// });

// nodejs处理路由
// const server = http.createServer((req, res) => {
// 	const url = req.url;
// 	const path = url.split('?')[0];
// 	res.end(url); // 返回路由
// });

// server.listen(8000, () => {
// 	console.log('http://localhost:8000');
// });
