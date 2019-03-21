/**
 * 用户服务
 *
 * 功能：
 *  1.用户账号信息相关
 *  2.群信息相关
 *  3.好友信息相关
 */



/**
 * 用户表
 */
const User = {
  uid, //String 用户id
  name, //String 用户名称
  avatar, //String 用户头像
  phone, //String 用户手机号
  password, //String 用户密码
  createdAt, //DateTime 创建时间
}

/**
 * 群表
 */
const Group = {
  gid, //String 群id
  name, //String 群名称
  limit, //Number 群人数限制
  createdAt, //DateTime 创建时间
}

/**
 * 用户-群表
 */
const GroupUser = {
  gid, //String 群id
  uid, //String 用户id
  createdAt, //DateTime 创建时间
}

/**
 * 关系表 (好友关系)
 */
const Friend = {
  from, //String 用户id [添加方]
  to, //String 用户id [接受方]
  createdAt, //DateTime 创建时间
}

//提供服务
module.exports = {
  /**
   * 注册用户
   */
  register: async (record) => {

  },

  /**
   * 获取用户信息
   */
  getUserInfo: async (uid) => {

  },

  /**
   * 添加好友
   * 用户[from]添加用户[to]为好友
   */
  addFriend: async (from, to) => {

  },

  /**
   * 删除好友
   * 用户[from]删除好友用户[to]
   */
  delFriend: async (from, to) => {

  },

  /**
   * 获取用户的好友列表
   */
  getFriendList: async (uid) => {

  },

  /**
   * 创建群
   */
  createGroup: async () => {

  },

  /**
   * 删除群
   */
  delGroup: async () => {

  },

  /**
   * 获取用户的群列表
   */
  getGroupList: async (uid) => {

  },

  /**
   * 拉用户入群
   */
  addGroupUser: async () => {

  },

  /**
   * 将用户踢出群
   */
  delGroupUser: async () => {

  },

  /**
   * 获取群用户列表
   */
  getGroupUserList: async () => {

  }
}
