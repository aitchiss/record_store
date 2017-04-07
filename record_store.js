var RecordStore = function(name, city, initialBalance){
  this.name = name
  this.city = city
  this.balance = initialBalance
  this.inventory = []
}

RecordStore.prototype = {
  addRecord: function(record){
    this.inventory.push(record)
  },

  printStoreInfo: function(){
    return this.name + ": " + this.city
  }
}


module.exports = RecordStore