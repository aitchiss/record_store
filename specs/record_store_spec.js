var assert = require('assert')
var RecordStore = require('../record_store.js')
var Record = require('../record.js')
var RecordInventory = require('../record_inventory.js')

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
    assert.strictEqual(0, recordStore.inventory.getLength())
  })

  it('has a 10000 balance', function(){
    assert.strictEqual(10000, recordStore.balance)
  })

  it('can add records to inventory', function(){
    var record1 = new Record('Bruce Springsteen', 'Darkness on the Edge of Town', 'rock', 1299)
    var record2 = new Record('The Hold Steady', 'Stay Positive', 'rock', 1199)
    recordStore.inventory.add(record1)
    recordStore.inventory.add(record2)
    assert.strictEqual(2, recordStore.inventory.getLength())
  })

  it('prints properties as string', function(){
    var expectedString = 'CC Records: Edinburgh'
    assert.strictEqual(expectedString, recordStore.printStoreInfo())
  })

  it('can list the inventory', function(){
    var record1 = new Record('Bruce Springsteen', 'Darkness on the Edge of Town', 'rock', 1299)
    var record2 = new Record('The Hold Steady', 'Stay Positive', 'rock', 1199)
    recordStore.inventory.add(record1)
    recordStore.inventory.add(record2)
    var expectedString = "Bruce Springsteen: 'Darkness on the Edge of Town'\nThe Hold Steady: 'Stay Positive'"
    assert.strictEqual(expectedString, recordStore.inventory.print())
  })

  it('can sell a record, increment balance', function(){
    var record1 = new Record('Bruce Springsteen', 'Darkness on the Edge of Town', 'rock', 1299)
    recordStore.inventory.add(record1)
    recordStore.sell(record1)
    assert.strictEqual(11299, recordStore.balance)
  })

  it('removes record from inventory when sold', function(){
    var record1 = new Record('Bruce Springsteen', 'Darkness on the Edge of Town', 'rock', 1299)
    recordStore.inventory.add(record1)
    recordStore.sell(record1)
    assert.strictEqual(0, recordStore.inventory.getLength())
  })

  it('removes correct record when sold', function(){
    var record1 = new Record('Bruce Springsteen', 'Darkness on the Edge of Town', 'rock', 1299)
    var record2 = new Record('The Hold Steady', 'Stay Positive', 'rock', 1199)
    recordStore.inventory.add(record1)
    recordStore.inventory.add(record2)
    recordStore.sell(record1)
    assert.strictEqual(record2, recordStore.inventory.inventory[0])
  })

  it('can calculate value of inventory', function(){
    var record1 = new Record('Bruce Springsteen', 'Darkness on the Edge of Town', 'rock', 1200)
    var record2 = new Record('The Hold Steady', 'Stay Positive', 'rock', 1100)
    recordStore.inventory.add(record1)
    recordStore.inventory.add(record2)
    assert.strictEqual(2300, recordStore.inventory.getTotalValue())
  })

  it('can report finances - balance/inventory value', function(){
    var record1 = new Record('Bruce Springsteen', 'Darkness on the Edge of Town', 'rock', 1200)
    var record2 = new Record('The Hold Steady', 'Stay Positive', 'rock', 1100)
    recordStore.inventory.add(record1)
    recordStore.inventory.add(record2)
    var expectedString = 'Current balance: 10000\nInventory value: 2300'
    assert.strictEqual(expectedString, recordStore.reportFinances())
  })

  it('can list inventory by genre', function(){
    var record1 = new Record('Bruce Springsteen', 'Darkness on the Edge of Town', 'rock', 1200)
    var record2 = new Record('The Hold Steady', 'Stay Positive', 'rock', 1100)
    var record3 = new Record('Jimmy Eat World', 'Bleed American', 'emo', 1200)
    recordStore.inventory.add(record1)
    recordStore.inventory.add(record2)
    recordStore.inventory.add(record3)
    var expectedString = "Jimmy Eat World: 'Bleed American'"
    assert.strictEqual(expectedString, recordStore.inventory.print('emo'))
  })
})