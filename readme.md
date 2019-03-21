# 项目文档

系统架构图
https://www.processon.com/apps/5c9325aee4b0afc7441a75d9

## 1. 表结构

见伪代码

## 2. 接口列表

服务列表:

- 连接层服务
- 状态服务
- 鉴权服务
- 用户服务
- 消息服务

### 连接层服务

与客户端直接连接, 保持与客户端的长连接。
根据自定义协议解析客户端的请求。
将客户端请求转发到基础服务。
通过长连接向客户端发送消息。
要支持横向扩展。
要有心跳机制。

充当聚合层,调用底层服务完成相关业务。

### 状态服务

保存状态信息

#### 接口列表

- 获取用户状态信息
- 更新用户状态信息

### 鉴权服务

提供登录接口,登录成功后返回一个token,该token有一定有效期。
每次客户端连tcp服务器的时候,要将该token告知连接层服务器,这样该客户端socket就是登录态的。

客户端本地保存该token值,重新登录后更新该token。

注销登录后,用户所有token失效

#### 接口列表

- 用户登录
- 用户注销登录
- 通过鉴权token获取用户信息

### 用户服务

提供用户、群、好友相关接口

#### 接口列表

- 用户相关
  - 注册用户
  - 获取用户信息
- 好友相关
  - 添加好友
  - 删除好友
  - 获取用户好友列表
- 群相关
  - 创建群
  - 删除群
  - 获取用户群列表
  - 拉用户入群
  - 将用户踢出群
  - 获取群用户列表

### 消息服务

提供消息相关接口

#### 接口列表

- 保存消息
- 查询历史消息

## 3. 测试方案

- 单元测试
- 集成测试
- 性能测试