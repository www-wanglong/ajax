# 1. 通用Web优化技术
## 1.1 性能指标
- Web Vitals
  - CLS
  - FID
  - CLP
## 1.2 性能分析
- Lighthouse
- Performance

## 1.3 Gzip压缩
服务端优化。文件压缩

查看文件有没有Gzip压缩：Content-Encoding

服务器配置

## 1.4 缓存
### 1.4.1 http缓存
前后端配合
#### 强制缓存
后台设置响应头 **Expires**：服务器时间

缺点：用户本地时间和服务器时间可能不一致

#### 升级版强制缓存
**Cache-Control**：'max-age=5' // 滑动时间。单位是秒
> 当前时间后5秒

Cache-Control： no-store // 禁用缓存

Cache-Control： no-cache // 协商缓存

#### 协商缓存
在使用缓存数据之前请求服务器数据是否更新。

方式一：基于文件的更新时间

缺点：文件的内容没有改变

方式二：基于ETag（根据文件的内容）
 - 服务器 根据文件的内容生成一个ETag值， 返回给客户端。返回响应头`Cache-Control：no-cache；etag：etag值`
 - 浏览器 每次请求会带着这个etag值，请求头：`if-none-match`
 - 服务器根据etag值变没变来确定返回的内容 304/200

### 1.4.2 项目中使用建议
文件打包完之后 文件名称是以文件内容生成的hash值，如果文件没有改变 `hash` 值不变
- html文件使用协商缓存
- 其他资源使用强制缓存

## 1.5 CDN资源




