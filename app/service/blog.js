'use strict';

const Service = require('egg').Service;

class BlogService extends Service {
  async echo() {
    console.log('122')
  }
}

module.exports = BlogService;
