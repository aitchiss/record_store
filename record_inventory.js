var RecordInventory = function(){
  this.inventory = []
}

RecordInventory.prototype = {
  add: function(record){
    this.inventory.push(record)
  }
}

module.exports = RecordInventory