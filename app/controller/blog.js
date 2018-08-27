'use strict';

const Controller = require('egg').Controller;

class BlogController extends Controller {
  async echo() {
    console.log('123')
  }
}

module.exports = BlogController;
