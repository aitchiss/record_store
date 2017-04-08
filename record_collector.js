var RecordCollector = function(initialFunds){
  this.cash = initialFunds
}

RecordCollector.prototype = {
  buy: function(record){
    this.cash -= record.price
  }
}


module.exports = RecordCollector