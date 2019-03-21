const msgHelper = require('./msgHelper')

const msg = {seq:0, cmd:10001, content: '股博视'}

const buf = msgHelper.serialize(msg)

console.log(msgHelper.deserialize(buf))
