'use strict'
const Controller = require('egg').Controller

class IndexController extends Controller {
  async lists() {
    // const dataList = {
    //   lists: [
    //     { id: 1, title: 'this is news 1', url: '/news/1' },
    //     { id: 2, title: 'this is news 2', url: '/news/2' }
    //   ]
    // }
    // await this.ctx.render('index.tpl', { lists: dataList.lists })
    // const ctx = this.ctx
    // const page = ctx.query.page || 1
    // console.log(ctx.service.index.lists(page), 'index service')
    const lists = await this.ctx.service.index.lists()
    await this.ctx.render('index.tpl', { lists })
  }
}

module.exports = IndexController
