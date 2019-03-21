const msgHelper = require('./msgHelper')

var net = require("net")
var host = process.env.host || "127.0.0.1"
var port = process.env.port || 8124

connect = (host, port)=>{
  var client
  client = net.connect({
    port: port,
    host: host
  }, ()=>{
    setInterval(()=>{
      var start = Date.now()
      const heartMsg = {seq: 11, cmd: 10001, content: "这是一个心跳消息" + start}
      client.write(msgHelper.serialize(heartMsg))
    }, 100)
  })

  client.on("data", (chunk)=>{
    const msg = msgHelper.deserialize(chunk)
    console.log('rece msg:', msg)
  })

  client.on("end", ()=>{
    console.log("end")
  })

  client.on("error", (error)=>{
    console.log("error", error)
  })
}

setInterval(() => {
  for (let i = 0; i < 10; i++) {
    connect(host, port)
  }
}, 10)
