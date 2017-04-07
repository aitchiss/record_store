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
  },

  printInventory: function(){
    var inventoryList =""
    this.inventory.forEach(function(record){
      inventoryList += record.artist + ": '" + record.title + "'"

      if (this.inventory.indexOf(record) !== (this.inventory.length - 1)){
        inventoryList += "\n"
      }
    }.bind(this))
    return inventoryList
  },

  sell: function(record){
    this.balance += record.price
    var index = this.inventory.indexOf(record)
    this.inventory.splice(index, 1)
  },

  getInventoryValue: function(){
    return this.inventory.reduce(function(acc, record){
      return acc + record.price
    }, 0)
  },

  reportFinances: function(){
    return 'Current balance: ' + this.balance + '\nInventory value: ' + this.getInventoryValue()
  }
}


module.exports = RecordStore