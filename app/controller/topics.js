'use strict';

const Controller = require('egg').Controller

class topicsController extends Controller {
  async index() {
    const data = await this.ctx.service.topics.show({
      id: '5b5f231f58db3ccf66a45083',
      page: 1,
      mdrender: false
    })
    this.ctx.body = data
  }
}

module.exports = topicsController
