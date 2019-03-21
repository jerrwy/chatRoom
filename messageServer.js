/**
 * 消息服务
 */

/**
 * 消息表
 */
const Message = {
  mid, //String 消息id 根据雪花算法生成
  from, //String 消息发出方 uid
  to, //String 消息接受方 uid
  content, //JSON 消息内容 支持多种形式
  gid, //群id 如果为空是私聊 否则是群聊
  createdAt, //DateTime 创建时间
}

/**
 * 提供服务
 */
module.exports = {
  /**
   * 创建消息
   */
  createMessage: async () => {

  },

  /**
   * 获取离线消息列表
   *
   * 拉取mid值为from以后的消息
   */
  getOfflineMessageList: async (uid, from) => {

  }
}
