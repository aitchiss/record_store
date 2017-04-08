var RecordInventory = require('./record_inventory.js')

var RecordCollector = function(initialFunds){
  this.cash = initialFunds
  this.collection = new RecordInventory()
}

RecordCollector.prototype = {
  buy: function(record){
    if (this.cash >= record.price){
      this.cash -= record.price
      this.collection.add(record)
    }
  },

  sell: function(record){
    this.cash += record.price
    this.collection.remove(record)
  },

  compareValueWithAnotherCollector: function(recordCollector){
    return this.collection.getTotalValue() - recordCollector.collection.getTotalValue()
  }


}


module.exports = RecordCollector