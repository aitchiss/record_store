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
})