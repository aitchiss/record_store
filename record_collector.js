var RecordCollector = function(initialFunds){
  this.cash = initialFunds
  this.collection = []
}

RecordCollector.prototype = {
  buy: function(record){
    this.cash -= record.price
  }
}


module.exports = RecordCollector