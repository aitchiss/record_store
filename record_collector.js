var RecordCollector = function(initialFunds){
  this.cash = initialFunds
  this.collection = []
}

RecordCollector.prototype = {
  buy: function(record){
    if (this.cash >= record.price){
      this.cash -= record.price
      this.collection.push(record)
    }
  },

  sell: function(record){
    this.cash += record.price
    this.removeFromCollection(record)
  },

  removeFromCollection: function(record){
    var index = this.collection.indexOf(record)
    this.collection.splice(index, 1)
  }
}


module.exports = RecordCollector