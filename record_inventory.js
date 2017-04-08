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
}

module.exports = RecordInventory