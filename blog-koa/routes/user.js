const router = require('koa-router')()
const { SuccessModel, ErrorModel } = require('../model/resModel')
const { login } = require('../controller/user')

router.prefix('/api/user')

router.post('/login', async (ctx, next) => {
  const { username, password } = ctx.request.body
  const loginData = await login(username, password)
  if (loginData.username) {
    // 设置session
    ctx.session.username = loginData.username
    ctx.session.nickname = loginData.nickname

    ctx.body = new SuccessModel()
    return
  }

  ctx.body = new ErrorModel('登录失败~')
})

// 登录检测
router.get('/login-check', async (ctx, next) => {
  if (ctx.session.username) {
    ctx.body = new SuccessModel()
  }
  ctx.body = new ErrorModel('未登录~')
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