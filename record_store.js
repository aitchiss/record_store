var RecordInventory = require('./record_inventory.js')

var RecordStore = function(name, city, initialBalance){
  this.name = name
  this.city = city
  this.balance = initialBalance
  this.inventory = new RecordInventory()
}

RecordStore.prototype = {
  addRecord: function(record){
    this.inventory.add(record)
  },

  printStoreInfo: function(){
    return this.name + ": " + this.city
  },

  sell: function(record){
    this.balance += record.price
    this.inventory.remove(record)
  },

  reportFinances: function(){
    return 'Current balance: ' + this.balance + '\nInventory value: ' + this.inventory.getTotalValue()
  }
}


module.exports = RecordStore