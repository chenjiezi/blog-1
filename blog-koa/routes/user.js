const router = require('koa-router')()
const { SuccessModel, ErrorModel } = require('../model/resModel')
const loginCheck = require('../middleware/loginCheck')

router.prefix('/api/user')

router.get('/login', async (ctx, next) => {
  const { username, password } = ctx.query
  // controller
  if (username) {
    ctx.body = new SuccessModel({
      username,
      password
    })
    return
  }

  ctx.body = new ErrorModel('登录失败~')
})

router.get('/session-test', async (ctx, next) => {
  if (ctx.session.viewCount == null) {
    ctx.session.viewCount = 0
  }

  ctx.session.viewCount++

  ctx.body = {
    viewCount: ctx.session.viewCount
  }
})

module.exports = router