const router = require('koa-router')()
const { SuccessModel, ErrorModel } = require('../model/resModel')
const { getList,
  getDetail,
  newBlog,
  updateBlog,
  delBlog } = require('../controller/blog')

router.prefix('/api/blog')

router.get('/list', async (ctx, next) => {
  const keyword = ctx.query.keyword || '' // 标题关键词
  const dataList = await getList(keyword)
  ctx.body = new SuccessModel(dataList)
})

router.get('/detail', async (ctx, next) => {
  const detailData = await getDetail(ctx.query.id)
  ctx.body = new SuccessModel(detailData)
})

router.post('/new', async (ctx, next) => {
  const body = ctx.request.body
  const data = await newBlog(body)
  ctx.body = new SuccessModel(data) // 返回新博客的 id
})

router.post('/update', async (ctx, next) => {
  const id = ctx.query.id
  const body = ctx.request.body
  const result = await updateBlog(id, body)
  if (result) {
    ctx.body = new SuccessModel()
  } else {
    ctx.body = new ErrorModel('编辑博客失败~~')
  }
})

router.get('/del', async (ctx, next) => {
  const result = await delBlog(ctx.query.id)
  if (result) {
    ctx.body = new SuccessModel(result)
  } else {
    ctx.body = new ErrorModel('删除博客失败~~')
  }
})

module.exports = router