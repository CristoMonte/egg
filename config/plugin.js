'use strict';

// had enabled by egg
// exports.static = true;
// 开启 egg-view-nunjucks 插件
exports.nunjucks = {
  enable: true,
  package: 'egg-view-nunjucks'
}
exports.mysql = {
  enable: true,
  package: 'egg-mysql'
}
exports.validate = {
  enable: true,
  package: 'egg-validate'
}
