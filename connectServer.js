/**
 * 连接层服务
 *
 * ps:
 *
 * 多个连接层服务通过消息队列互通。
 */


let connections = {}
server = net.createServer((c)=>{
  c.id = uuid()
  connections[c.id] = true

  c.on("end", ()=>{
    //客户端断开连接, 更新用户状态
  })

  c.on("error", (err)=>{
    //客户端报错, 更新用户状态
  })

  c.on("data", (chunk)=>{
    //客户端发送数据

    //1. 根据自定义协议解析chunk数据 防止粘包问题
    //2. 客户端与服务端定时发送心跳 保证连接
    //3. 客户端连上后需要发送token,服务端调用auth服务进行用户认证。
    //4. 将用户状态信息保存到状态服务

    //5. 服务端解析客户端数据后 获取接口指令, 调用底层服务完成业务逻辑。
  })
})

port = process.env.port || 8124

server.listen(port, ()=>{
  //服务器启动
  process.stdin.resume()
})
