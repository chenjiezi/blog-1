const router = require('koa-router')()
const { SuccessModel, ErrorModel } = require('../model/resModel')
const { getList } = require('../controller/blog')

router.prefix('/api/blog')

router.get('/list', async (ctx, next) => {
  const dataList = await getList()
  ctx.body = new SuccessModel(dataList)
})

module.exports = router