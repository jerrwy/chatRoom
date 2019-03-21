/**
 * msg格式
 *
 *
 * {
 *  seq, //uint16
 *  cmd，//unit16
 *  length, //unit16 content len
 *  content, json
 * }
 *
 */


module.exports = {
  /**
   * 序列化
   *
   * input: msg
   * output: buffer
   */
  serialize: (msg) => {
    const {seq,cmd,content} = msg
    let seqBuf = Buffer.alloc(2)
    let cmdBuf = Buffer.alloc(2)
    let lengthBuf = Buffer.alloc(2)
    let contentBuf = Buffer.from(content)

    seqBuf.writeUIntBE(seq, 0, 2)
    cmdBuf.writeUIntBE(cmd, 0, 2)
    lengthBuf.writeUIntBE(contentBuf.length, 0, 2)
    return Buffer.concat([seqBuf,cmdBuf,lengthBuf,contentBuf])
  },

  /**
   * 反序列化
   * input: buffer
   * output: msg
   */
  deserialize: (buffer) => {
    const seq = buffer.slice(0, 2).readUIntBE(0,2)
    const cmd = buffer.slice(2, 4).readUIntBE(0,2)
    const length = buffer.slice(4, 6).readUIntBE(0,2)
    const content = buffer.slice(6, 6+length)
    return {seq, cmd, content: content.toString()}
  }
}
