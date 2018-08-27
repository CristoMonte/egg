'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index)
  router.get('/index', controller.index.lists)
  // topics是将cnode的topics的数据多进行一层封装，感觉主要是用来做爬虫的吧，可以结合模版渲染
  router.get('/topics', controller.topics.index)
  router.get('/blog', controller.blog.echo)
  // router.post('createPost', '/api/posts', controller.post.create);
};
