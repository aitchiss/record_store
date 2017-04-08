var assert = require('assert')
var RecordInventory = require('../record_inventory.js')

describe('Record Inventory tests', function(){

  var recordInventory = new RecordInventory

  it('starts with empty inventory', function(){
    assert.strictEqual(0, recordInventory.inventory.length)
  })
})