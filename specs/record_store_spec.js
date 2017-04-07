var assert = require('assert')
var RecordStore = require('../record_store.js')

describe('RecordStore tests', function(){

  var recordStore = new RecordStore('CC Records', 'Edinburgh')

  it('has a name', function(){
    assert.strictEqual('CC Records', recordStore.name)
  })

  it('has a city', function(){
    assert.strictEqual('Edinburgh', recordStore.city)
  })

  it('has an empty inventory when initialized', function(){
    assert.strictEqual(0, recordStore.inventory.length)
  })
})