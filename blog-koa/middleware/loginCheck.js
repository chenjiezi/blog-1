const { ErrorModel } = require('../model/resModel')

module.exports = async (ctx, next) => {
  const session = {
    username: 1
  }
  if (session.username) {
    next()
    return
  }

  ctx.body = new ErrorModel('未登录~')
}