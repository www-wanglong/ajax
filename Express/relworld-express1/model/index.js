const mongoose = require('mongoose');
const { dbUrl } = require('../config/config.default')

// 链接数据库
mongoose.connect(dbUrl);

var db = mongoose.connection;

db.on('error', (err) => {
  console.log('MongoDB 数据库连接失败', err)
});

db.once('open', function() {
  console.log('MongoDB 数据库连接成功')
});

// 组织导出模型

module.exports = {
  User: mongoose.model('User', require('./user')),
  Article: mongoose.model('Article', require('./article'))
}