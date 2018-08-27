'use strict';

module.exports = appInfo => {
  // 不是很明白这个代码存在的意义是什么？？？
  // 可能是为了确保exports在导出的时候，内部只有exports这一个对象吧
  // 是为了让config和exports拥有同一个引用吗
  // 那这么做的好处是什么
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1531732437201_8145';

  // add view config
  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.tpl': 'nunjucks'
    }
  }
  // add mysql config
  config.mysql = {
    client: {
      host: '127.0.0.1',
      port: '3306',
      user: 'root',
      password: '',
      database: 'cristo'
    },
    // 是否挂载到app上，默认为true
    app: true,
    // 是否挂载到agent上，默认为false
    agent: false
  }
  config.security = {
    csrf: {
      enable: false
    }
  }
  // add your config here
  config.middleware = [];

  return config;
};
