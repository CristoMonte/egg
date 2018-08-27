'use strict';

const Service = require('egg').Service

class TopicsService extends Service {
  constructor(ctx) {
    super(ctx)
    this.root = 'https://cnodejs.org/api/v1'
  }
  async request(url, opts) {
    url = `${this.root}${url}`
    opts = Object.assign({
      // 为什么是个数组
      timeout: [ '30s', '30s' ],
      dataType: 'json'
    }, opts)
    return this.ctx.curl(url, opts)
  }
  async show(params) {
    // console.log(params.id, 'params')
    const result = await this.request(`/topic/${params.id}`, {
      data: {
        page: params.page,
        mdrender: params.mdrender
      }
    })
    this.checkSuccess(result)
    return result.data.data
  }
  async list(params) {
    const result = await this.request('/topic', {
      data: params
    })
    this.checkSuccess(result)
    return result.data.data
  }
  async create(params) {
    const result = this.request('/topics', {
      method: 'post',
      data: params,
      contentType: 'json'
    })
    this.checkSuccess(result)
    return result.data.data
  }
  async update(params) {
    const result = this.request('/topics/update', {
      method: 'post',
      data: params,
      contentType: 'json'
    })
    this.checkSuccess(result)
    return result.data.data
  }
  checkSuccess(result) {
    console.log(result, 'result')
    if (result.status !== 200) {
      const errorMsg = result.data && result.data.error_msg ? result.data.error_msg : 'unknow error'
      // 是不是会阻塞代码？？不然为什么下面的代码是没有执行的。
      this.ctx.throw(result.status, errorMsg)
    }
    // 下面是打印的一个result对象
    // {
    //   data: { success: false, error_msg: '不是有效的话题id' },
    //   status: 400,
    //   headers: {
    //     server: 'nginx/1.4.6 (Ubuntu)',
    //     date: 'Tue, 31 Jul 2018 08:10:56 GMT',
    //     'content-type': 'application/json; charset=utf-8',
    //     'content-length': '55',
    //     connection: 'keep-alive',
    //     'x-powered-by': 'Express',
    //     'x-frame-options': 'SAMEORIGIN',
    //     'access-control-allow-origin': '*',
    //     etag: 'W/"37-JpVk1JiGwSYdTohzczELj2Y6VvU"',
    //     vary: 'Accept-Encoding',
    //     'x-response-time': '3.211ms'
    //   },
    //   res: {
    //     status: 400,
    //     statusCode: 400,
    //     headers: {
    //       server: 'nginx/1.4.6 (Ubuntu)',
    //       date: 'Tue, 31 Jul 2018 08:10:56 GMT',
    //       'content-type': 'application/json; charset=utf-8',
    //       'content-length': '55',
    //       connection: 'keep-alive',
    //       'x-powered-by': 'Express',
    //       'x-frame-options': 'SAMEORIGIN',
    //       'access-control-allow-origin': '*',
    //       etag: 'W/"37-JpVk1JiGwSYdTohzczELj2Y6VvU"',
    //       vary: 'Accept-Encoding',
    //       'x-response-time': '3.211ms'
    //     },
    //     size: 55,
    //     aborted: false,
    //     rt: 231,
    //     keepAliveSocket: false,
    //     data: { success: false, error_msg: '不是有效的话题id' },
    //     requestUrls: [ 'https://cnodejs.org/api/v1/topic/1' ],
    //     timing: null,
    //     remoteAddress: '123.59.77.142',
    //     remotePort: 443,
    //     socketHandledRequests: 1,
    //     socketHandledResponses: 1
    //   }
    // }
    if (!result.data.success) {
      this.ctx.throw(500, 'remote response error', { data: result.data })
    }
    return result
  }
}
module.exports = TopicsService
