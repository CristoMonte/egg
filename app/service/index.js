'use strict'
const Service = require('egg').Service

class IndexService extends Service {
  async lists() {
    const data = await this.app.mysql.get('egg_study', { id: 3 })
    const lists = []
    lists.push(data)
    return lists
  }
}
module.exports = IndexService
