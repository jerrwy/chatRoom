/**
 * 鉴权服务器
 */


/**
 * Token表
 */
const Token = {
  token, //String 鉴权token
  uid, //用户id
  expireTime,//DateTime token过期时间
}


/**
 * 提供服务
 */
module.exports = {
  /**
   * 用户登录
   *
   * 登录验证成功后返回token
   */
  login: async () => {

  },

  /**
   * 用户注销登录
   *
   * 将用户的token全部失效
   */
  logout: async () => {

  },

  /**
   * 根据鉴权token获取用户信息
   */
  getUserByToken: async (token) => {

  }
}
