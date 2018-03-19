/**
 * FIFO队列算法实现缓存
 * 需要一个对象和一个数组作为辅助
 * 数组记录进入顺序
 */
class FifoCache{
    constructor(limit){
        this.limit = limit || 10
        this.map = {}
        this.keys = []
    }
    set(key,value){
        let map = this.map
        let keys = this.keys
        if (!Object.prototype.hasOwnProperty.call(map,key)) {
            if (keys.length === this.limit) {
                delete map[keys.shift()]//先进先出，删除队列第一个元素
            }
            keys.push(key)
        }
        map[key] = value//无论存在与否都对map中的key赋值
    }
    get(key){
        return this.map[key]
    }
}

module.exports = FifoCache