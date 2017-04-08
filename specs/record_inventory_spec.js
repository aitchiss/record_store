var assert = require('assert')
var RecordInventory = require('../record_inventory.js')
var Record = require('../record.js')

describe('Record Inventory tests', function(){

  var recordInventory 

  beforeEach(function(){
    recordInventory = new RecordInventory
  })

  it('starts with empty inventory', function(){
    assert.strictEqual(0, recordInventory.inventory.length)
  })

  it('can add to inventory', function(){
    var record1 = new Record('Bruce Springsteen', 'Darkness on the Edge of Town', 'rock', 1299)
    recordInventory.add(record1)
    assert.strictEqual(1, recordInventory.inventory.length)
  })

  it('can remove from inventory', function(){
    var record1 = new Record('Bruce Springsteen', 'Darkness on the Edge of Town', 'rock', 1299)
    recordInventory.add(record1)
    recordInventory.remove(record1)
    assert.strictEqual(0, recordInventory.inventory.length)
  })

  it('can filter inventory by genre', function(){
    var record1 = new Record('Bruce Springsteen', 'Darkness on the Edge of Town', 'rock', 1200)
    var record2 = new Record('The Hold Steady', 'Stay Positive', 'rock', 1100)
    var record3 = new Record('Jimmy Eat World', 'Bleed American', 'emo', 1200)
    recordInventory.add(record1)
    recordInventory.add(record2)
    recordInventory.add(record3)
    assert.strictEqual(1, recordInventory.getInventoryByGenre('emo').length)
  })
})