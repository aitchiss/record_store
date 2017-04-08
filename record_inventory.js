

var RecordInventory = function(){
  this.inventory = []
}

RecordInventory.prototype = {

  getLength: function(){
    return this.inventory.length
  },

  add: function(record){
    this.inventory.push(record)
  },

  remove: function(record){
    var index = this.inventory.indexOf(record)
    this.inventory.splice(index, 1)
  },

  getInventoryByGenre: function(genre){
    if (genre){
      return this.inventory.filter(function(record){
        return record.genre === genre
      })
    } else {
      return this.inventory
    }
  },

  print: function(genre){
    var inventoryList =""
    var records = this.getInventoryByGenre(genre)
    records.forEach(function(record){
      inventoryList += record.artist + ": '" + record.title + "'"

      if (records.indexOf(record) !== (records.length - 1)){
        inventoryList += "\n"
      }
    })
    return inventoryList
  },

  getTotalValue: function(){
    return this.inventory.reduce(function(acc, record){
      return acc + record.price
    }, 0)
  },
}

module.exports = RecordInventory