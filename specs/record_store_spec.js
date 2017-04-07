var assert = require('assert')
var RecordStore = require('../record_store.js')
var Record = require('../record.js')

describe('RecordStore tests', function(){

  var recordStore

  beforeEach(function(){
    recordStore =  new RecordStore('CC Records', 'Edinburgh', 10000)
  })

  it('has a name', function(){
    assert.strictEqual('CC Records', recordStore.name)
  })

  it('has a city', function(){
    assert.strictEqual('Edinburgh', recordStore.city)
  })

  it('has an empty inventory when initialized', function(){
    assert.strictEqual(0, recordStore.inventory.length)
  })

  it('has a 10000 balance', function(){
    assert.strictEqual(10000, recordStore.balance)
  })

  it('can add records to inventory', function(){
    var record1 = new Record('Bruce Springsteen', 'Darkness on the Edge of Town', 'rock', 1299)
    var record2 = new Record('The Hold Steady', 'Stay Positive', 'rock', 1199)
    recordStore.addRecord(record1)
    recordStore.addRecord(record2)
    assert.strictEqual(2, recordStore.inventory.length)
  })

  it('prints properties as string', function(){
    var expectedString = 'CC Records: Edinburgh'
    assert.strictEqual(expectedString, recordStore.printStoreInfo())
  })

  it('can list the inventory', function(){
    var record1 = new Record('Bruce Springsteen', 'Darkness on the Edge of Town', 'rock', 1299)
    var record2 = new Record('The Hold Steady', 'Stay Positive', 'rock', 1199)
    recordStore.addRecord(record1)
    recordStore.addRecord(record2)
    var expectedString = "Bruce Springsteen: 'Darkness on the Edge of Town'\nThe Hold Steady: 'Stay Positive'"
    assert.strictEqual(expectedString, recordStore.printInventory())
  })

  it('can sell a record, increment balance', function(){
    var record1 = new Record('Bruce Springsteen', 'Darkness on the Edge of Town', 'rock', 1299)
    recordStore.addRecord(record1)
    recordStore.sell(record1)
    assert.strictEqual(11299, recordStore.balance)
  })

  it('removes record from inventory when sold', function(){
    var record1 = new Record('Bruce Springsteen', 'Darkness on the Edge of Town', 'rock', 1299)
    recordStore.addRecord(record1)
    recordStore.sell(record1)
    assert.strictEqual(0, recordStore.inventory.length)
  })

  it('removes correct record when sold', function(){
    var record1 = new Record('Bruce Springsteen', 'Darkness on the Edge of Town', 'rock', 1299)
    var record2 = new Record('The Hold Steady', 'Stay Positive', 'rock', 1199)
    recordStore.addRecord(record1)
    recordStore.addRecord(record2)
    recordStore.sell(record1)
    assert.strictEqual(record2, recordStore.inventory[0])
  })

  it('can calculate value of inventory', function(){
    var record1 = new Record('Bruce Springsteen', 'Darkness on the Edge of Town', 'rock', 1200)
    var record2 = new Record('The Hold Steady', 'Stay Positive', 'rock', 1100)
    recordStore.addRecord(record1)
    recordStore.addRecord(record2)
    assert.strictEqual(2300, recordStore.getInventoryValue())
  })

  it('can report finances - balance/inventory value', function(){
    var record1 = new Record('Bruce Springsteen', 'Darkness on the Edge of Town', 'rock', 1200)
    var record2 = new Record('The Hold Steady', 'Stay Positive', 'rock', 1100)
    recordStore.addRecord(record1)
    recordStore.addRecord(record2)
    var expectedString = 'Current balance: 10000\nInventory value: 2300'
    assert.strictEqual(expectedString, recordStore.reportFinances())
  })
})