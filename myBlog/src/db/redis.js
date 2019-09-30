const redis = require('redis')
const { REDIS_CONF } = require('../conf/db')

// 创建客户端
const redisClient = redis.createClient(REDIS_CONF.port, REDIS_CONF.host)
redisClient.on('error', err => {
  console.log(err)
})

function set (key, val) {
  if (typeof val === 'object') {
    val = JSON.stringify(val)
  }
  redisClient.set(key, val, redis.print)
}

function get (key) {
  const promise = new Promise((resolve, reject) => {
    redisClient.get(key, (err, val) => {
      if (err) {
        reject(err)
        return
      }
      if (val == null) {
        resolve(null)
        return
      }
      // try catch 在这里不是为了捕抓错误,判断val是否json格式，做出对应的返回
      try {
        resolve(
          JSON.parse(val)
        )
      } catch (ex) {
        resolve(val)
      }

    })

  })
  return promise
}

module.exports = {
  set,
  get
}