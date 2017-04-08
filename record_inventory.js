var RecordInventory = function(){
  this.inventory = []
}

RecordInventory.prototype = {
  add: function(record){
    this.inventory.push(record)
  },

  remove: function(record){
    var index = this.inventory.indexOf(record)
    this.inventory.splice(index, 1)
  }
}

module.exports = RecordInventory