var assert = require('assert')
var RecordStore = require('../record_store.js')

describe('RecordStore tests', function(){

  var recordStore = new RecordStore('CC Records', 'Edinburgh', 10000)

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

  it('can add records to inventory'), function(){
    var record1 = new Record('Bruce Springsteen', 'Darkness on the Edge of Town', 'rock', 1299)
    var record2 = new Record('The Hold Steady', 'Stay Positive', 'rock', 1199)
    recordStore.addRecord(record1)
    recordStore.addRecord(record2)
    assert.strictEqual(2, recordStore.inventory.length)
  }

  it('prints properties as string', function(){
    var expectedString = 'CC Records: Edinburgh'
    assert.strictEqual(expectedString, recordStore.printStoreInfo())
  })
})