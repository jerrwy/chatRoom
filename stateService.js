/**
 * State状态服务
 *
 * 数据可存储在redis中
 */


const State = {
  status, //String 用户状态 在线|离线
  uid, //String 用户id
  userIp, //String 用户ip
  serverIp, //String 连接层服务器ip
  createdAt, //DateTime 登录时间
}


/**
 * 提供服务
 */
module.exports = {
  /**
   * 获取用户状态
   */
  getUserState: async (uid) => {

  },

  /**
   * 设置用户状态
   */
  setUserState: async (record) => {

  }
}
